import "./footer.css"

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container_redes_sociais">
                    <a href="https://www.instagram.com/j.souza027">
                        <img className="img_editada" src="imagens/Instagram.png" alt="Instagram"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100094329159288">
                        <img className="img_editada" src="imagens/Facebook.png" alt="Facebook"/>
                    </a>
                    <a href="https://github.com/Jsouza027">
                        <img className="img_editada" src="imagens/GitHub.png" alt="GitHub"/>
                    </a>
                </div>
                <h3>Desenvolvido por João Victor</h3>
                <div className="container_contatos">
                    <a href="https://api.whatsapp.com/send/?phone=61991946403&text=Ol%C3%A1,%20gostaria%20de%20contatar%20Jo%C3%A3o%20Victor.&type=phone_number&app_absent=0"><strong>Telefone: </strong>(61) 9 9194-6403</a>
                    <p><strong>E-mail: </strong>goncalvesjoaovictor723@gmail.com</p>
                </div>
            </footer>
        </>
    )
}