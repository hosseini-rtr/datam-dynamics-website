import FormInput from "../components/FormInput";
import styles, { layout } from "../style";

const categories = [
  "Product Features",
  "User Experience",
  "Technical Support",
  "Documentation",
  "Other",
];

const SuggestionForm = () => (
  <div className="flex flex-col w-full max-w-[800px] mt-10 bg-black-gradient-2 rounded-[20px] p-10 shadow-xl">
    <FormInput
      label="Category"
      type="select"
      name="category"
      options={[
        { value: "", label: "Select a category" },
        ...categories.map((category) => ({
          value: category.toLowerCase().replace(" ", "_"),
          label: category,
        })),
      ]}
      required
    />

    <FormInput
      label="Title"
      name="title"
      placeholder="Brief title for your suggestion"
      required
    />

    <FormInput
      label="Description"
      type="textarea"
      name="description"
      placeholder="Detailed description of your suggestion"
      rows={5}
      required
    />

    <button
      type="submit"
      className={`w-full sm:w-auto py-5 px-10 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[15px] hover:shadow-lg transition-all duration-300 self-center`}
    >
      Submit Suggestion
    </button>
  </div>
);

const Suggestions = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Share Your Suggestions</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Help us improve our products and services by sharing your ideas
              and feedback.
            </p>
          </div>

          <div className="flex flex-col items-center w-full">
            <SuggestionForm />

            <p className="font-poppins font-normal text-[14px] text-dimWhite text-center mt-6">
              Your feedback is valuable to us. We review all suggestions and
              implement the most impactful ones.
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Suggestions;
