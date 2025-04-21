"use client";

import Button from "@/components/Button";

// Note: Request button shown in wireframe but:
// - No wireframe for request flow/form
// - No definition of request logic/workflow
// - Relationship with "Request access" in Storyboard modal unclear
// - Current implementation is placeholder

// TODO: Icon library integration
const RequestButton = () => {
  return (
    <Button
      label="Request"
      variant="secondary"
      icon={<span>+</span>}
      onClick={() => console.log("Request clicked")}
    />
  );
};

export default RequestButton;
