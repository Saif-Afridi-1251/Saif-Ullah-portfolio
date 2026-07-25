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

            // className={`px-5 py-3 rounded-xl transition ${styles[variant]}`}
            className="
                        inline-flex
                        items-center
                        justify-center
                        rounded-xl
                        px-6
                        py-3
                        font-medium
                        transition-all
                        duration-300
                        bg-blue-600
                        hover:bg-blue-700
                        hover:scale-105
                        shadow-xl
                        hover:shadow-2xl
                        "

        >

            {children}

        </a>

    )

}

export default Button