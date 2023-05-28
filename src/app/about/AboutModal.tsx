import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import "./modalStyles.css";
import Content from './Content';


export default function About() {

    return (
        <Dialog.Root>

            <Dialog.Trigger asChild>
                <button className="about-modal-button">En savoir plus</button>
                
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" />
                <Dialog.Content className="DialogContent">
                    <Dialog.Close asChild>
                        <button className="IconButton" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>

                    

                    <Content />

                </Dialog.Content>
            </Dialog.Portal>
            
  </Dialog.Root>
    );
}