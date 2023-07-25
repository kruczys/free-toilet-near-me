import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import PasswordChecklist, { RuleNames } from "react-password-checklist";

interface Props {
  rules: RuleNames[];
  minLength: number;
  password: string;
  confirmPassword: string;
}

const PasswordCheckList = ({
  rules,
  minLength,
  password,
  confirmPassword,
}: Props) => {
  return (
    <div className="mb-4 text-xs">
      <PasswordChecklist
        rules={rules}
        minLength={minLength}
        value={password}
        valueAgain={confirmPassword}
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
