
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Learning Experience?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of students and educators already using EduTutor AI
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
          <Link to="/signup">Start Your Journey Today</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
