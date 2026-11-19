import React from "react";

type ButtonVariant = "primary" | "outline" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

type AnchorButtonProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    external?: boolean;
  };

type NativeButtonProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: undefined;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-olive text-ivory border border-olive hover:bg-olive-dark hover:border-olive-dark active:bg-olive-dark/95 shadow-[0_2px_12px_rgba(107,112,66,0.16)]",
  outline:
    "bg-transparent text-olive-dark border border-terracotta/70 hover:border-olive hover:bg-olive hover:text-ivory active:bg-olive-dark",
  secondary:
    "bg-cream text-olive-dark border border-terracotta/50 hover:border-olive hover:bg-parchment/60",
  ghost:
    "bg-transparent text-olive-dark border-b border-terracotta/65 hover:border-olive hover:text-olive px-1 py-1 min-h-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-[40px] px-5 py-2 text-[11px] tracking-[0.24em]",
  md: "min-h-[46px] px-7 py-3 text-xs tracking-[0.26em]",
  lg: "min-h-[52px] px-9 py-3.5 text-xs sm:text-[13px] tracking-[0.28em]",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const baseClasses =
    "inline-flex items-center justify-center uppercase font-sans font-normal transition-colors duration-300 ease-out select-none cursor-pointer text-center";

  const combinedClasses = `${baseClasses} ${
    variant === "ghost" ? "" : sizeStyles[size]
  } ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && typeof props.href === "string") {
    const anchorProps = { ...props } as Partial<AnchorButtonProps>;
    const href = anchorProps.href ?? "";
    const external = anchorProps.external;
    delete anchorProps.href;
    delete anchorProps.external;
    delete anchorProps.variant;
    delete anchorProps.size;
    delete anchorProps.className;
    delete anchorProps.children;

    const trimmedHref = href.trim();
    const isExternal =
      external ??
      (trimmedHref.startsWith("http://") ||
        trimmedHref.startsWith("https://"));

    const safeHref = trimmedHref || "#rsvp";

    return (
      <a
        href={safeHref}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={combinedClasses}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const buttonProps = { ...props } as Partial<NativeButtonProps>;
  delete buttonProps.variant;
  delete buttonProps.size;
  delete buttonProps.className;
  delete buttonProps.children;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={combinedClasses}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
