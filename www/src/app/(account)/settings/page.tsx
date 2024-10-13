import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import UpdateForm from "./_partials/form";

const SettingsPage = () => {
  return (
    <article>
      <header className="flex-col">
        <h1 className="font-bold text-3xl mb-2">Settings</h1>
        <p>Update your profile information.</p>
      </header>

      <br />

      <Card>
        <CardHeader>
          <UpdateForm />
        </CardHeader>
      </Card>
    </article>
  );
};

export default SettingsPage;
