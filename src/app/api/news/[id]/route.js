import dbConnect from "@/lib/dbConnect";
import News from "@/models/news";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); // دریافت id خبر از پارامترهای URL

    // بررسی وجود خبر
    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }


    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(
      { news },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id"); // دریافت id خبر از پارامترهای URL

    // بررسی وجود خبر
    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json({ error: "News not found" }, { status: 404 });
    }

    // حذف خبر
    await News.findByIdAndDelete(id);

    // بازگرداندن پاسخ موفقیت‌آمیز
    return NextResponse.json(
      { message: "News deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting news:", error);
    return NextResponse.json(
      { error: "Failed to delete news" },
      { status: 500 }
    );
  }
}
