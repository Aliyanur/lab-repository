function FragmentLayout(){
    return(
        <>
        {/* Header section */}
        <header>
            <h1>Fragment Layout</h1>
        </header>

        {/* Main content */}

        <main>
            <p>This layout is wrapped using React Fragment.</p>
        </main>

        {/* Footer section */}

        <footer>
            <p>2026</p>
        </footer>
        </>
    )
}

export default FragmentLayout;

// Components that used only React Fragment. It returns header, main and footer as siblings.