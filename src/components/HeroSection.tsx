
import UserTypeSelection from "@/components/UserTypeSelection";

const HeroSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionize Learning with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI-Powered Education
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            EduTutor AI transforms education through personalized quizzes, real-time assessment, 
            and intelligent insights powered by IBM Watsonx and Granite foundation models.
          </p>
        </div>

        <UserTypeSelection />
      </div>
    </section>
  );
};

export default HeroSection;
