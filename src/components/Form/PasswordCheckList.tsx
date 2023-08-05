import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import PasswordChecklist, {
  ReactPasswordChecklistProps,
} from "react-password-checklist";

const PasswordCheckList = (props: ReactPasswordChecklistProps) => {
  return (
    <div className="mb-4 text-xs">
      <PasswordChecklist
        {...props}
        iconComponents={{
          ValidIcon: (
            <div className="mr-1">
              <AiOutlineCheck />
            </div>
          ),
          InvalidIcon: (
            <div className="mr-1">
              <RxCross1 />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default PasswordCheckList;
