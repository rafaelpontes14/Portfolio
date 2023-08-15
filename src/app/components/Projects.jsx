const Projects = () => {
    return ( 
        <div className="p-52 max-sm:p-0 max-md:p-10" id="projetos">
            <div className="mt-16">
                <h1 className="text-yellow-200 font-abc text-5xl font-semibold text-center">
                        Projetos
                </h1>
            </div>

            <div className="flex flex-wrap justify-center gap-20 mt-28">

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./projeto1.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://pagejs.netlify.app" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Landing Page
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./projeto2.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://responsive-halloween.netlify.app" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Responsive Halloween
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./projeto3.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://tasty-nature.netlify.app/" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Tasty Nature
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./projeto4.png" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="https://beats-responsive.netlify.app" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                Page Headphones
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                -------
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="w-96 h-96 shadow-3xl hover:bg-yellow-200 transition duration-1000 max-md:w-64 max-md:h-64">
                    <div className="relative">

                            <img src="./" alt="" width={365} className="mt-3 ml-2.5 bg-cover max-md:w-60"/>
  
                        <a href="" target="_blank">
                            <div class="image__overlay">
                                <h3 class="image__title">Projeto</h3>
                                <p class="image__description">
                                -----------
                                </p>
                            </div>
                        </a>
                    </div>

                </div>


            </div>

        </div>
     );
}
 
export default Projects;