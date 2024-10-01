import { useState, useEffect } from "react";
import Input from "./input";
import { useDropzone } from "react-dropzone";

interface Ivalue {
  email: string;
  phone: number;
  YourCoanoamy: string;
  Bussiness: string;
  Address: string;
  Postcode: number;
  Contact: string;
  Linkedin: string;
  idea: string;
  file: File | null;
}

export function Main() {
  const [values, setvalue] = useState<Ivalue>({
    YourCoanoamy: "",
    Bussiness: "",
    Address: "",
    Postcode: 0,
    Contact: "",
    phone: 0,
    email: "",
    Linkedin: "",
    idea: "",
    file: null,
  });

  const [fileUploaded, setFileUploaded] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    setvalue({ ...values, file: acceptedFiles[0] });
    setFileUploaded(true);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const valueInput = (
    input:
      | "YourCoanoamy"
      | "Bussiness"
      | "Address"
      | "Postcode"
      | "Contact"
      | "phone"
      | "email"
      | "Linkedin"
      | "idea",
    value: number | string
  ) => {
    setvalue({ ...values, [input]: value });
  };

  const validateForm = () => {
    const {
      YourCoanoamy,
      Bussiness,
      Address,
      Postcode,
      Contact,
      phone,
      email,
      Linkedin,
      idea,
    } = values;

    if (
      YourCoanoamy &&
      Bussiness &&
      Address &&
      Postcode &&
      Contact &&
      phone &&
      email &&
      Linkedin &&
      idea
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [values]);

  const submit = () => {
    if (isFormValid) {
      console.log(values);
    }
  };

  return (
    <div className="flex w-full justify-center items-center gap-11 mt-16">
      <div className="flex flex-col items-start w-full max-w-xl px-20">
        <div className="mb-6 flex flex-col items-start justify-start w-full">
          <h1 className="text-[22px]">contact us</h1>
          <p className="text-[11px] text-gray-400">
            Need and experienced and skilled hand with custom IT projects?
          </p>
          <p className="text-[11px] text-gray-400">
            Fill out the form to get free consultation
          </p>
        </div>
        <div className="w-full space-y-4 flex flex-col justify-center items-center">
          <Input
            type="text"
            placeholder="Your Coanoamy Name"
            onChange={(value) => {
              valueInput("YourCoanoamy", value);
            }}
          />
          <Input
            type="text"
            placeholder="Nature of Bussiness"
            onChange={(value) => {
              valueInput("Bussiness", value);
            }}
          />
          <div className="flex gap-2 w-full">
            <Input
              type="text"
              placeholder="Adress"
              classname="w-[70%]"
              onChange={(value) => {
                valueInput("Address", value);
              }}
            />
            <Input
              type="number"
              placeholder="Postcode"
              classname="w-[30%]"
              onChange={(value) => {
                valueInput("Postcode", value);
              }}
              validator={(value) => /^\d{4}$/.test(value)}
            />
          </div>
          <Input
            type="text"
            placeholder="Contact name"
            onChange={(value) => {
              valueInput("Contact", value);
            }}
          />
          <Input
            type="number"
            placeholder="Contact Phone"
            onChange={(value) => {
              valueInput("phone", value);
            }}
            validator={(value) => /^\d{11}$/.test(value)}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(value) => {
              valueInput("email", value);
            }}
            validator={(value) =>
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            }
          />
          <Input
            type="text"
            placeholder="Linkedin"
            onChange={(value) => {
              valueInput("Linkedin", value);
            }}
          />
          <Input
            type="text"
            placeholder="Let's talk about your idea"
            onChange={(value) => {
              valueInput("idea", value);
            }}
          />
        </div>

        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-400 w-full p-4 text-center mb-4 mt-3 h-20"
        >
          <input {...getInputProps()} />
          <p>upload additional file</p>
        </div>
        {fileUploaded && <p className="text-green-600">File uploaded!</p>}
        <button
          type="submit"
          onClick={submit}
          className="w-full bg-green-500 h-12 text-white"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
      <div className="flex flex-col w-full px-16">
        <h3 className="text-xl font-semibold mb-4">Offices</h3>

        <div className="mb-4">
          <p className="font-medium">United States</p>
          <p className="text-gray-500">500 5th Avenue Suite 400, NY 10110</p>
        </div>

        <div className="mb-4">
          <p className="font-medium">United Kingdom</p>
          <p className="text-gray-500">High St, Bromley BR1 1DN</p>
        </div>

        <div className="mb-4">
          <p className="font-medium">France</p>
          <p className="text-gray-500">
            80 avenue des Terroirs de France, Paris
          </p>
        </div>

        <div className="mt-6">
          <p className="font-semibold mb-2 text-sm">For Quick Inquiries</p>
          <div className="flex flex-col gap-1">
            <p className="text-gray-700">🇬🇧 +44 7777777777</p>
            <p className="text-gray-700">🇺🇸 +1 3333333330</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm font-medium">
            Would you like to join our newsletter?
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-l-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <button className="bg-green-500 text-white rounded-r-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="green"
                width="28px"
                height="28px"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.2l-3.5-3.5L4 14l5 5L20 8l-1.4-1.4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
