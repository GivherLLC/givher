import React from 'react';

export default function MailChimpForm() {
  return (
    <div id="mc_embed_shell" className="w-full">
      <div id="mc_embed_signup" className="w-full">
        <form
          action="https://givher.us3.list-manage.com/subscribe/post?u=77ae79c55230b72dc58df0cdb&amp;id=72c5afb896&amp;f_id=00cecbe0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div
            id="mc_embed_signup_scroll"
            className="flex flex-col gap-[1rem] rounded-lg py-[1.5rem] px-[1.25rem] w-full"
          >
            <h3 className="font-visbyBold text-navySmoke dark:text-softOpal mb-[2rem]">
              Let&apos;s Chat!
            </h3>
            {/* <div className="indicates-required">
                            <span className="asterisk">*</span> required
                        </div> */}
            <div className="w-full flex flex-col sm:flex-row justify-between gap-[1rem]">
              <div className="mc-field-group w-full flex flex-col">
                <label
                  htmlFor="mce-FNAME"
                  className="leading-10 text-navySmoke dark:text-softOpal"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="FNAME"
                  className="text text-navySmoke dark:text-softOpal leading-10 bg-softOpal dark:bg-navySmoke border-b border-navySmoke dark:border-electricYellow"
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group w-full flex flex-col">
                <label
                  htmlFor="mce-LNAME"
                  className="leading-10 text-navySmoke dark:text-softOpal"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="LNAME"
                  className="text text-navySmoke dark:text-softOpal leading-10 bg-softOpal dark:bg-navySmoke border-b border-navySmoke dark:border-electricYellow"
                  id="mce-LNAME"
                />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between gap-[1rem]">
              <div className="mc-field-group w-full flex flex-col">
                <label
                  htmlFor="mce-EMAIL"
                  className="leading-10 text-navySmoke dark:text-softOpal "
                >
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email leading-10 bg-softOpal dark:bg-navySmoke border-b border-navySmoke  text-navySmoke dark:text-softOpal dark:border-electricYellow"
                  id="mce-EMAIL"
                  required
                />
              </div>
              <div className="mc-field-group w-full flex flex-col">
                <label
                  htmlFor="mce-PHONE"
                  className="leading-10 text-navySmoke dark:text-softOpal"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="PHONE"
                  className="REQ_CSS leading-10 text-navySmoke dark:text-softOpal bg-softOpal dark:bg-navySmoke border-b border-navySmoke dark:border-electricYellow"
                  id="mce-PHONE"
                />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-between gap-[1rem]">
              <div className="mc-field-group sm:w-[50%] flex flex-col">
                <label
                  htmlFor="mce-COMPANY"
                  className="leading-10 text-navySmoke dark:text-softOpal"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="COMPANY"
                  className="text leading-10 text-navySmoke dark:text-softOpal bg-softOpal dark:bg-navySmoke border-b border-navySmoke dark:border-electricYellow"
                  id="mce-COMPANY"
                />
              </div>
            </div>
            <div hidden>
              <input type="hidden" name="tags" value="3485782" />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '-5000px' }}
            >
              <input
                type="text"
                name="b_77ae79c55230b72dc58df0cdb_72c5afb896"
                tabIndex={-1}
                aria-hidden="true"
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button cursor-pointer bg-mauvelous dark:bg-mauvelous p-[0.75rem] min-w-[175px] rounded-[.25rem] font-visbyBold text-navySmoke text-center bg-opacity-85 hover:bg-opacity-100 transition-opacity ease-in-out mt-[1.25rem]"
                value="Subscribe"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
