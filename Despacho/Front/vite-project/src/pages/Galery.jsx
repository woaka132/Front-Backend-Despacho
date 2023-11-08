import navComp from "../components/nav"

import Img1 from "../Images/DesarrolloApps2.png"
import Img2 from "../Images/softEmp2.png"

export default function GaleryPage(){
    return(
        <div className="text-gray-700  overflow-hidden">
            <div className="md:grid md:grid-cols-6 grid-cols-3">
                {navComp()}
                <main className="main">
                    <div>
                        <h1 className="mainTitle">Galeria</h1>
                        <div className="grid overflow-scroll no-scrollbar h-80vh sm:h-85vh md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-center justify-items-center ">
                            <div className="cards">
                                <img className="cardImg" src={Img1} alt=""/>
                                <div>
                                    <p className="absolute top-0 p-5 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Doloremque illo quia cumque earum laudantium officiis molestiae 
                                        dignissimos sint illum aperiam nam saepe blanditiis dolorum culpa 
                                        omnis qui, iusto similique repudiandae!
                                    </p>
                                </div>
                                <div>
                                    <h1 className="cardTitle">Proyecto 1</h1>
                                </div>
                            </div> 
                            <div className="cards">
                                <img className="cardImg" src={Img2} alt=""/>
                                <div>
                                    <p className="absolute top-0 p-5 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Doloremque illo quia cumque earum laudantium officiis molestiae 
                                        dignissimos sint illum aperiam nam saepe blanditiis dolorum culpa 
                                        omnis qui, iusto similique repudiandae!
                                    </p>
                                </div>
                                <div>
                                    <h1 className="cardTitle">Proyecto 2</h1>
                                </div>
                            </div> 
                            <div className="cards">
                                <img className="cardImg" src="img/webDes2.png" alt=""/>
                                <div>
                                    <p className="absolute top-0 p-5 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Doloremque illo quia cumque earum laudantium officiis molestiae 
                                        dignissimos sint illum aperiam nam saepe blanditiis dolorum culpa 
                                        omnis qui, iusto similique repudiandae!
                                    </p>
                                </div>
                                <div>
                                    <h1 className="cardTitle">Proyecto 3</h1>
                                </div>
                            </div> 
                            <div className="cards">
                                <img className="cardImg" src="img/softEmp2.png" alt=""/>
                                <div>
                                    <p className="absolute top-0 p-5 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Doloremque illo quia cumque earum laudantium officiis molestiae 
                                        dignissimos sint illum aperiam nam saepe blanditiis dolorum culpa 
                                        omnis qui, iusto similique repudiandae!
                                    </p>
                                </div>
                                <div>
                                    <h1 className="cardTitle">Proyecto 4</h1>
                                </div>
                            </div> 
                            <div className="cards">
                                <img className="cardImg" src="img/webDes2.png" alt=""/>
                                <div>
                                    <p className="absolute top-0 p-5 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Doloremque illo quia cumque earum laudantium officiis molestiae 
                                        dignissimos sint illum aperiam nam saepe blanditiis dolorum culpa 
                                        omnis qui, iusto similique repudiandae!
                                    </p>
                                </div>
                                <div>
                                    <h1 className="cardTitle">Proyecto 5</h1>
                                </div>
                            </div> 
                            <div className="cards">
                                <img className="cardImg" src="" alt=""/>
                                <div>
                                    <p className="absolute top-0 p-5 text-justify text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Doloremque illo quia cumque earum laudantium officiis molestiae 
                                        dignissimos sint illum aperiam nam saepe blanditiis dolorum culpa 
                                        omnis qui, iusto similique repudiandae!
                                    </p>
                                </div>
                                <div>
                                    <h1 className="cardTitle">Proyecto 6</h1>
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                    
                </main>
            </div>
        </div>
    )
}