import * as Avatar from '@radix-ui/react-avatar';
import "./contentStyles.css";
import { TwitterLogoIcon, LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';


const paragraphs = ["Cette application s'appuie sur chatGPT, le modèle de langage d'OpenAI, pour générer des réponses adaptées au contexte d'un entretien d'embauche.",
                    "L'intelligence artificielle est en train de transformer les entreprises. Les accompagner dans cette révolution sera l'un des défis les plus difficiles et passionnants de ces prochaines années.",
                    ];



export default function Content() {
    return (

        <div className='about'>

            <div className='cv'>
                <Avatar.Root className="AvatarRoot">
                    <Avatar.Image
                        className="AvatarImage"
                        src="https://pbs.twimg.com/profile_images/1662912989316493312/OikmnLqo_400x400.jpg"
                        alt="Thomas Douche"
                    />
                </Avatar.Root>

                <div className="titre">
                    <p className='thomas'>Thomas D.</p>
                    <p className='ingenieur'>Ingénieur - Cybersécurité / Blockchain / IA</p>

                    <div className='reseaux'>
                        <a href="https://twitter.com/TomDch88" target="_blank" rel="noopener noreferrer">
                            <TwitterLogoIcon className='reseau'/>
                        </a>
                        <a href="https://www.linkedin.com/in/thomas-douche-ingenieur/" target="_blank" rel="noopener noreferrer">
                            <LinkedInLogoIcon className='reseau'/>
                        </a>
                        <a href="https://github.com/Stentor88Ch216" target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className='reseau'/>
                        </a>
                        <a href="mailto:decision-bohrium-09@icloud.com" target="_blank" rel="noopener noreferrer">
                            <EnvelopeClosedIcon className='reseau'/>
                        </a>
                    </div>
                </div>
            </div>

            <div className='info'>
                <p>{paragraphs[0]}</p>
                <p>{paragraphs[1]}</p>
                <p>{paragraphs[2]}</p>
                <p>{paragraphs[3]}</p>
                <p>{paragraphs[4]}</p>
            </div>

        </div>

    )
}