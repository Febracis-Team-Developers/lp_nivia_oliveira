const Section3 = () => {
    return ( 
        <div className="gradient-background2 py-12">
            <div className="flex flex-col items-center py-12">
                <h1 className="text-4xl text-secondary-foreground font-bold">Histórias de transformação</h1>
            </div>

            <div className="flex justify-center video-container">
                <div>
                    <iframe 
                        width="216" 
                        height="385"  
                        src="./videos/video1nivia.mp4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>

                <div>
                    <iframe 
                        width="216" 
                        height="385"  
                        src="./videos/video2nivia.mp4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>

                <div>
                    <iframe 
                        width="216" 
                        height="385"  
                        src="./videos/video3nivia.mp4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>

                <div>
                    <iframe 
                        width="216" 
                        height="385"  
                        src="./videos/video4nivia.mp4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                
            </div>
        </div>
     );
}
 
export default Section3;