import connectToDb from "../../../../lib/db";
import Component from "@/features/components/models/components.models";

export async function POST() {
  try {
    await connectToDb();

    const components = await Component.insertMany([
      {
        name: "Card",
        tag: "div",
        tsxCode: `
export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold leading-none tracking-tight mb-2">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
        `,
      },
      {
        name: "Input",
        tag: "input",
        tsxCode: `
export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      {...props}
    />
  );
}
        `,
      },
      {
        name: "Badge",
        tag: "span",
        tsxCode: `
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
      {children}
    </span>
  );
}
        `,
      },
    ]);

    return Response.json({
      message: "3 components created successfully",
      data: components,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        message: "Failed to create components",
      },
      {
        status: 500,
      }
    );
  }
}


export async function GET() {
  try {
    await connectToDb();

    const components = await Component.find({});

    return Response.json({
      message: "Components fetched successfully",
      data: components,
    });
  } catch (error) {
    console.error("Error fetching components:", error);

    return Response.json(
      {
        message: "Failed to fetch components",
      },
      {
        status: 500,
      }
    );
  }
}