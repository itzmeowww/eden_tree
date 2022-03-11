const DottedBackground = () => {
    return <div className="w-full h-screen fixed -z-10" style={{
        'background': 'white',
        'backgroundImage': 'radial-gradient(black 1px,transparent 0)',
        'backgroundSize': '40px 40px',
        'backgroundPosition': '-19px - 19px',
    }}
    ></div >
}

export default DottedBackground