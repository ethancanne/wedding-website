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
    "bg-brown text-ivory border border-brown hover:bg-ink hover:border-ink active:bg-ink/90 shadow-xs",
  outline:
    "bg-transparent text-ink border border-taupe hover:border-brown hover:bg-brown hover:text-ivory active:bg-brown/90",
  secondary:
    "bg-cream text-ink border border-taupe/50 hover:border-brown hover:bg-taupe/15",
  ghost:
    "bg-transparent text-ink border-b border-taupe hover:border-brown hover:text-brown px-1 py-1 min-h-0",
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
