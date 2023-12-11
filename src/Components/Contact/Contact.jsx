export default function () {
  return (
    <>
      <div>
        <div>
          <div>
            <div className="container mx-auto p-6">
              <div className="w-full min-h-screen flex justify-center items-center ">
                <div className="w-full text-center md:text-left">
                  <h1 className="text-3xl font-bold border-b-4 border-black inline ">
                    Contact
                  </h1>
                  <div className="flex justify-center items-center">
                    <div className="card w-3/4 p-8 mt-8 shadow-2xl bg-base-100">
                      <form className="card-body">
                        <div className="w-3/4 block md:flex gap-4 mx-auto ">
                          <div className="form-control w-1/2">
                            <label className="label">
                              <span className="label-text">Name</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Enter Your Name"
                              className="input input-bordered focus:outline-none"
                              required
                            />
                          </div>
                          <div className="form-control w-1/2">
                            <label className="label">
                              <span className="label-text">Email</span>
                            </label>
                            <input
                              type="email"
                              placeholder="email"
                              className="input input-bordered focus:outline-none"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-control w-3/4 mx-auto">
                          <label className="label">
                            <span className="label-text">Message</span>
                          </label>
                          <textarea
                            type="text"
                            placeholder="Write Your Message"
                            rows="5"
                            cols={50}
                            className="border focus:outline-none"
                            required
                          />
                        </div>

                        <div className="form-control mt-6  w-full flex items-center">
                          <button className="btn btn-primary w-1/2">
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
