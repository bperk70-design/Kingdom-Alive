import Section from "../../components/Section";

export default function PrivacyPage() {
  return (
    <Section
      eyebrow="Privacy"
      title="Privacy policy"
      description="This policy explains how Kingdom Alive collects and uses your information."
    >
      <div className="max-w-3xl space-y-4 text-sm text-zinc-300">
        <p>
          Kingdom Alive collects only the information you provide through our
          contact forms or direct communication. We use this information to
          respond to inquiries, deliver services, and improve our offerings.
        </p>
        <p>
          We do not sell your personal information. We only share data with
          trusted tools needed to operate our business, such as email and form
          providers.
        </p>
        <p>
          If you have questions about this policy, contact us and we will respond
          promptly.
        </p>
      </div>
    </Section>
  );
}
