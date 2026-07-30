import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PRACTICE_AREAS } from "@/data/practiceAreas";
import { Magnetic } from "@/components/ui/Magnetic";

interface FormState {
  name: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", phone: "", matter: "", message: "" };
const TOTAL_STEPS = 3;

export function ContactWizard() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (field: keyof FormState, value: string) =>
    setValues((v) => ({ ...v, [field]: value }));

  const canAdvance = () => {
    if (step === 1) return values.name.trim() !== "" && /\S+@\S+\.\S+/.test(values.email);
    if (step === 2) return values.matter !== "";
    return true;
  };

  const next = () => {
    if (!canAdvance()) {
      setError(step === 1 ? "Please enter your name and a valid email." : "Please choose a matter type.");
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };

  const back = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 1));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (values.message.trim() === "") {
      setError("Please tell us briefly about your matter.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-emerald-deep">
          <Check size={26} />
        </div>
        <p className="font-display text-xl text-ivory">Thank you, {values.name.split(" ")[0]}.</p>
        <p className="max-w-[36ch] text-sm text-ivory/65">
          We've received your enquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex gap-2">
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
              i + 1 <= step ? "bg-gold" : "bg-ivory/20"
            }`}
          />
        ))}
      </div>

      <form onSubmit={onSubmit}>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="field mb-6">
                <input
                  placeholder=" "
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                />
                <label>Full name</label>
              </div>
              <div className="field mb-6">
                <input
                  type="email"
                  placeholder=" "
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                />
                <label>Email address</label>
              </div>
              <div className="field mb-6">
                <input
                  placeholder=" "
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
                <label>Phone number (optional)</label>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-sm text-ivory/65">What's this regarding?</p>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {PRACTICE_AREAS.map((p) => (
                  <button
                    type="button"
                    key={p.slug}
                    onClick={() => update("matter", p.title)}
                    className={`rounded-xl border px-4 py-3 text-left text-[13.5px] transition-colors ${
                      values.matter === p.title
                        ? "border-gold bg-gold/10 text-gold-light"
                        : "border-ivory/20 text-ivory/70 hover:border-ivory/40"
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="field mb-2">
                <textarea
                  placeholder=" "
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                />
                <label>Tell us briefly about your matter</label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && <p className="mt-2 text-[13px] text-gold-light">{error}</p>}

        <div className="mt-8 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={back}
              className="text-sm font-semibold text-ivory/60 hover:text-ivory"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < TOTAL_STEPS ? (
            <Magnetic>
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-emerald-deep"
              >
                Continue <ArrowUpRight size={16} />
              </button>
            </Magnetic>
          ) : (
            <Magnetic>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-emerald-deep"
              >
                Send Enquiry <ArrowUpRight size={16} />
              </button>
            </Magnetic>
          )}
        </div>
      </form>
    </div>
  );
}
