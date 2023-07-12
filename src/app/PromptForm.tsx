//import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { PaperPlaneIcon } from "./icons";
import TextareaAutosize from 'react-textarea-autosize';


interface PromptFormProps {
    submitAction: () => Promise<void>;
    textField: string;
    setTextField: React.Dispatch<React.SetStateAction<string>>;
  }

  export default function PromptForm(props: PromptFormProps) {
    return (
      <div className="prompt-container">
        <form
          className="prompt"
          onSubmit={(e) => {
            props.submitAction();
            e.preventDefault(); // Prevent page refresh
            props.setTextField(""); // Reset the textField value in the parent component
          }}
        >
          <TextareaAutosize
            className="textfield"
            placeholder="Votre message..."
            name="textfield"
            minRows={1}
            maxRows={10}
            value={props.textField}
            onChange={(e) => props.setTextField(e.target.value)}
          />

          <button className="send-button">
            <div className="paper-plane-icon-container">
              <PaperPlaneIcon/>
            </div>
          </button>

        </form>
      </div>
    );
  }