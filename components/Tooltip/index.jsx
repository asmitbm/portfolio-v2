"use client";
import { cloneElement, useMemo, useState } from "react";
import {
    offset,
    flip,
    shift,
    autoUpdate,
    useFloating,
    useInteractions,
    useHover,
    useFocus,
    useRole,
    useDismiss,
} from "@floating-ui/react-dom-interactions";
import { motion, AnimatePresence } from "framer-motion";
import { mergeRefs } from "react-merge-refs";
import styles from "./styles.module.css";

export default function Tooltip({ children, label, placement = "right" }) {
    const [open, setOpen] = useState(false);

    const { x, y, reference, floating, strategy, context } = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        middleware: [offset(5), flip(), shift({ padding: 8 })],
        whileElementsMounted: autoUpdate,
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        useHover(context, { restMs: 40 }),
        useFocus(context),
        useRole(context, { role: "tooltip" }),
        useDismiss(context),
    ]);

    // Preserve the consumer's ref
    const ref = useMemo(
        () => mergeRefs([reference, children.ref]),
        [reference, children]
    );

    return (
        <>
            {cloneElement(
                children,
                getReferenceProps({ ref, ...children.props })
            )}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 400,
                        }}
                        ref={floating}
                        className={styles.Tooltip}
                        style={{
                            position: strategy,
                            top: y ?? 0,
                            left: x ?? 0,
                        }}
                        {...getFloatingProps()}
                    >
                        {label}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
