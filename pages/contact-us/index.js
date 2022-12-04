import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";

import InputText from "../../components/input-text";
import InputTextArea from "../../components/text-area";
import SectionHeader from "../../components/section-header";

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    reset,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const router = useRouter();

  const onSubmit = (data) => {
    try {
      console.log("data", data);
    } catch (error) {
      console.log(
        "Error occurred while submitting contact details",
        error.message
      );
    }
  };

  return (
    <>
      <div
        className="md:p-10 sm:p-4 mt-10 h-auto"
        style={{ background: "rgb(240, 240, 240)" }}
      >
        <div className="text-center md:mt-10 sm:mt-20">
          <SectionHeader title="Contact Us" />
        </div>
        <div className="mt-20 flex justify-center">
          <div className="md:w-1/2 sm:w-full p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex">
                <div className="w-full">
                  <InputText
                    label="First Name"
                    error={errors?.firstName}
                    register={register("firstName", {
                      required: "Please enter first name",
                    })}
                  />
                </div>
                <div className="w-full ml-5">
                  <InputText
                    label="Last Name"
                    error={errors?.lastName}
                    register={register("lastName", {
                      required: "Please enter last name",
                    })}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="w-full mt-3">
                  <InputText
                    label="Email"
                    error={errors?.email}
                    register={register("email", {
                      required: "Please enter Email",
                      pattern: {
                        value:
                          /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
                        message: "Please enter valid email",
                      },
                    })}
                  />
                </div>
                <div className="w-full mt-3 ml-5">
                  <InputText
                    type="number"
                    label="Phone Number"
                    error={errors?.phoneNumber}
                    register={register("phoneNumber", {
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter valid phone number",
                      },
                    })}
                  />
                </div>
              </div>
              <div className="mt-3">
                <InputTextArea
                  style={{
                    height: "200px",
                  }}
                  label="Message"
                  register={register("message")}
                />
              </div>
              <div className="mt-10 flex justify-end">
                <Button
                  onClick={() => router.push("/")}
                  className="text-white bg-red-600 hover:bg-red-500"
                >
                  Cancel
                </Button>
                <Button className="ml-5 mr-1" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
