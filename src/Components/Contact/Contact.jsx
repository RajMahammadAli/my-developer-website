export default function () {
  return (
    <>
      <div name="contact">
        <div>
          <div className="container mx-auto p-8">
            <div className="w-full min-h-screen flex justify-center items-center ">
              <div className="w-full text-center md:text-left">
                <h1 className="text-3xl font-bold border-b-4 border-black inline ">
                  Contact
                </h1>
                <div className="mt-8 flex justify-center items-center">
                  <form
                    action="https://getform.io/f/137c5fa5-8624-47c9-b19f-34515b34f76c"
                    method="POST"
                    className="md:flex flex-col w-full md:w-1/2"
                  >
                    <div className="mb-4 md:flex justify-between gap-2">
                      <input
                        className="w-full md:w-1/2 p-2 border focus:outline-none rounded-sm"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                      />
                      <input
                        className="w-full my-4 md:my-0 p-2 md:w-1/2 border focus:outline-none rounded-sm"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <textarea
                      className="w-full border focus:outline-none rounded-sm p-2"
                      type="text"
                      name="message"
                      rows="5"
                      placeholder="Enter Your Message"
                    />
                    <button
                      className="mt-4 border p-2 bg-primary text-white rounded-lg"
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
