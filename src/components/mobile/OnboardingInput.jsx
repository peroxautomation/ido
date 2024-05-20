import { ErrorMessage, useField } from "formik";
import IncorrectPassword from "./PasswordErrorMessage";

/**
 * Input component used in the login and sign up screens
 * @returns JSX input element
 */
const OnboardingInput = ({ label, ...props }) => {

  /**************************************************************************** */
  /********************************{Input states}****************************** */
  /**************************************************************************** */
  const [field, meta] = useField(props);

  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-white font-button-2-semibold">
      <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-1">
        <label htmlFor={field.name} className="flex-1 relative leading-[24px]">{label}</label>
      </div>
      <input
        className={`[border:none] [outline:none] font-button-2-semibold text-base bg-white-8 self-stretch rounded-xl flex flex-row items-center justify-center py-2.5 px-4 text-white ${meta.error && meta.touched}`}
        {...field}
        {...props}
        placeholder={props.inputplaceholder}
      />
      <div className="w-[335px] flex-row items-center justify-center py-1 px-0 box-border text-sm text-error-red">
        {
          field.name == 'password' ?
            <IncorrectPassword></IncorrectPassword> :
            <ErrorMessage name={field.name}></ErrorMessage>
        }
      </div>
    </div>
  );
};

export default OnboardingInput;
