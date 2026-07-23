function Button({
    href,
    children,
    variant = "primary"
}) {

    const styles = {

        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "border border-slate-600 hover:bg-slate-800"

    }

    return (

        <a

            href={href}

            target="_blank"

            rel="noreferrer"

            className={`px-5 py-3 rounded-xl transition ${styles[variant]}`}

        >

            {children}

        </a>

    )

}

export default Button