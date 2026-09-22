
import { useForm, Controller } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    reset,
    watch,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
      country: ""
    }
  });

  // watch password
  const password = watch("password");

  // Form submit
  function onSubmit(data) {
    console.log("Form Data:", data);
  }

  // Set name automatically
  function fillName() {
    setValue("name", "Asmeera");
  }

  // Get current form values
  function showValues() {
    const values = getValues();

    console.log("Current Values:", values);
  }

  // Manually validate name
  async function checkName() {
    const result = await trigger("name");

    console.log("Name Valid:", result);
  }

  // Reset complete form
  function resetForm() {
    reset();
  }

  return (
    <div className="page">

      <div className="form-card">

        <h1>Registration Form</h1>

        <p className="subtitle">
          React Hook Form Practice
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* NAME */}

          <div className="field">

            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",

                minLength: {
                  value: 3,
                  message: "Name must contain at least 3 characters"
                }
              })}
            />

            {errors.name && (
              <p className="error">
                {errors.name.message}
              </p>
            )}

          </div>


          {/* EMAIL */}

          <div className="field">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              {...register("email", {
                required: "Email is required"
              })}
            />

            {errors.email && (
              <p className="error">
                {errors.email.message}
              </p>
            )}

          </div>


          {/* PASSWORD */}

          <div className="field">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",

                minLength: {
                  value: 6,
                  message: "Password must contain at least 6 characters"
                }
              })}
            />

            {errors.password && (
              <p className="error">
                {errors.password.message}
              </p>
            )}

          </div>


          {/* WATCH */}

          <div className="watch-box">

            <strong>Password Length:</strong>

            <span>
              {password ? password.length : 0}
            </span>

          </div>


          {/* AGE */}

          <div className="field">

            <label htmlFor="age">
              Age
            </label>

            <input
              id="age"
              type="number"
              placeholder="Enter your age"
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 18,
                  message: "Age must be at least 18"
                }
              })}
            />

            {errors.age && (
              <p className="error">
                {errors.age.message}
              </p>
            )}

          </div>


          {/* GENDER */}

          <div className="field">

            <label>
              Gender
            </label>

            <div className="radio-group">

              <label>
                <input
                  type="radio"
                  value="Male"
                  {...register("gender", {
                    required: "Please select gender"
                  })}
                />
                Male
              </label>

              <label>
                <input
                  type="radio"
                  value="Female"
                  {...register("gender")}
                />
                Female
              </label>

            </div>

            {errors.gender && (
              <p className="error">
                {errors.gender.message}
              </p>
            )}

          </div>


          {/* COUNTRY */}

          <div className="field">

            <label htmlFor="country">
              Country
            </label>

            <select
              id="country"
              {...register("country", {
                required: "Please select country"
              })}
            >

              <option value="">
                Select Country
              </option>

              <option value="Pakistan">
                Pakistan
              </option>

              <option value="India">
                India
              </option>

              <option value="UK">
                United Kingdom
              </option>

            </select>

            {errors.country && (
              <p className="error">
                {errors.country.message}
              </p>
            )}

          </div>


          {/* CONTROLLED INPUT */}

          <div className="field">

            <label>
              Controlled Username
            </label>

            <Controller
              name="controlledName"
              control={control}
              defaultValue=""
              rules={{
                required: "Username is required"
              }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Controlled input"
                />
              )}
            />

          </div>


          {/* BUTTONS */}

          <div className="buttons">

            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>

            <button
              type="button"
              onClick={fillName}
            >
              Fill Name
            </button>

            <button
              type="button"
              onClick={showValues}
            >
              Get Values
            </button>

            <button
              type="button"
              onClick={checkName}
            >
              Check Name
            </button>

            <button
              type="button"
              onClick={resetForm}
            >
              Reset
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default App;

