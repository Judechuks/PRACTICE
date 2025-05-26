import { useForm, Controller } from "react-hook-form";
import CustomeizedSelect from "./CustomizedSelect";

const FormWithCustomSelect = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <article className="mt-4">
      <form className="h-full grid grid-1fr-auto">
        {/* form fields container */}
        <div>
          {/* Course Code and Course Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label
                htmlFor="course_code"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Course Code:
              </label>
              <input
                type="text"
                id="course_code"
                {...register("course_code", {
                  required: "Course code is required",
                })}
                className={`mt-1 block w-full px-3 py-1.5 border ${
                  errors.course_code ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.course_code && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.course_code.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="course_title"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Course Title:
              </label>
              <input
                type="text"
                id="course_title"
                {...register("course_title", {
                  required: "Course title is required",
                })}
                className={`mt-1 block w-full px-3 py-1.5 border ${
                  errors.course_title ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.course_title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.course_title.message}
                </p>
              )}
            </div>
          </div>
          {/* Credit Load and Semester */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label
                htmlFor="credit_load"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Credit Load:
              </label>
              <input
                type="number"
                id="credit_load"
                step={0.01}
                min={0}
                max={5}
                {...register("credit_load", {
                  required: "Credit load is required",
                  min: {
                    value: 0,
                    message: "Credit load must be greater than 0",
                  },
                  max: {
                    value: 5,
                    message: "Credit load must be less than or equal to 5",
                  },
                })}
                className={`mt-1 block w-full px-3 py-1.5 border ${
                  errors.credit_load ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              {errors.credit_load && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.credit_load.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="semester"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Semester:
              </label>
              <select
                id="semester"
                {...register("semester", {
                  required: "Semester is required",
                })}
                className={`mt-1 block w-full px-3 py-1.5 border ${
                  errors.semester ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value=""> -- Select Semester -- </option>
                <option value="First Semester">First Semester</option>
                <option value="Second Semester">Second Semester</option>
              </select>
              {errors.semester && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.semester.message}
                </p>
              )}
            </div>
          </div>
          {/* Level and Department */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
            <div>
              <label
                htmlFor="level"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Level:
              </label>
              <select
                id="level"
                {...register("level", {
                  required: "Level is required",
                })}
                className={`mt-1 block w-full px-3 py-1.5 border ${
                  errors.level ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value=""> -- Select Level -- </option>
                <option value="100 Level">100 Level</option>
                <option value="200 Level">200 Level</option>
                <option value="300 Level">300 Level</option>
                <option value="400 Level">400 Level</option>
                <option value="500 Level">500 Level</option>
              </select>
              {errors.level && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.level.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="department"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Department:
              </label>
              <select
                id="department"
                {...register("department", {
                  required: "Department is required",
                })}
                className={`mt-1 block w-full px-3 py-1.5 border ${
                  errors.department ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value=""> -- Select Department -- </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Sciences">Sciences</option>
                <option value="Statistics">Statistics</option>
                <option value="Food Technology">Food Technology</option>
                <option value="Management Sciences">Management Sciences</option>
              </select>
              {errors.department && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.department.message}
                </p>
              )}
            </div>
          </div>

          {/* Is Compulsory and Selected Lecturer */}
          <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-4 mb-3">
            <div>
              <input
                type="checkbox"
                id="is_compulsory"
                {...register("is_compulsory")}
                className={`mt-1 mr-1.5 inline-block w-4 h-4 px-3 py-1.5 border ${
                  errors.is_compulsory ? "border-red-500" : "border-gray-300"
                } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              <label
                htmlFor="is_compulsory"
                className="inline-block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Is Compulsory
              </label>
              {errors.is_compulsory && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.is_compulsory.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="colors"
                className="block text-lg font-medium text-gray-700 cursor-pointer"
              >
                Departmental Color(s):
              </label>
              {/* Use the Controller component to render the react-select */}
              <Controller
                name="colors"
                control={control}
                rules={{ required: true }} // Ensure at least one item is selected
                // defaultValue={[]} // Initial value for the multi-select
                render={({ field, fieldState }) => (
                  <CustomeizedSelect
                    field={field}
                    fieldState={fieldState}
                    // value={field.value || []} // Handle default value
                  />
                )}
              />
              {errors.colors && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.colors.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className={`flex justify-end gap-1.5 mt-5 max-[700px]:flex-col`}>
          <button
            type="button"
            className="min-w-32 py-2 px-5 font-semibold border-2 bg-blue-900 text-white rounded-md hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 cursor-pointer"
            onClick={handleSubmit((data) => {
              console.log(data); // Form data
            })}
          >
            Submit
          </button>
        </div>
      </form>
    </article>
  );
};

export default FormWithCustomSelect;
