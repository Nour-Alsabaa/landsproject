import { useState } from "react";
import { useParams } from "react-router-dom";
import "./LandGallery.css";

const land = {
  title: "أرض زراعية مميزة في حماة",
  city: "حماة",
  village: "مصياف",
  area: 10,
  price: 5000,
  bookingStatus: "متاحة",
  bookingEndDate: "31/12/2026",
  workersNumber: 5,
  equipments: "جرار زراعي، نظام ري",
  ratingsAverage: "متوسط",
  climateDescription: "مناخ متوسطي",
  suitableCrops: "القمح، الزيتون، الخضراوات",
  irrigationMethods: "الري بالتنقيط",
  soilTypes: "تربة طينية خصبة",
  description:
    "أرض زراعية مناسبة للاستثمار، تتميز بتربتها الخصبة وإمكانية زراعة أنواع مختلفة من المحاصيل.",
  firstName: "أحمد",
  lastName: "السيد",
  phone: "+963 944 015 895",
  email: "owner@example.com",
  images: [
    "/lands/p1.jpg",
    "/lands/p2.jpg",
    "/lands/p3.jpg",
    "/lands/p4.jpg",
  ],
};

const initialComments = [
  {
    name: "يمان عطار",
    date: "16 تموز 2022",
    stars: 4,
    comment:
      "تربة الأرض جيدة، وتبدو مناسبة لزراعة المحاصيل الموسمية.",
  },
  {
    name: "هيا بواب",
    date: "12 نيسان 2022",
    stars: 3,
    comment:
      "يفضل التأكد من توفر المياه وتحسين نظام الري قبل الاستثمار.",
  },
];

export default function Landgallery() {
  const { id } = useParams();

  const [selectedImage, setSelectedImage] = useState(0);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(5);

  let savedLands = [];

  try {
    savedLands = JSON.parse(localStorage.getItem("lands") || "[]");
  } catch {
    savedLands = [];
  }

  const savedLand = savedLands.find(
    (item) => String(item.id) === String(id)
  );

  const details = savedLand || land;

  const images =
    details.images?.length
      ? details.images
      : details.landImages?.length
      ? details.landImages
      : land.images;

  const ownerName =
    [details.firstName, details.lastName].filter(Boolean).join(" ") ||
    "مالك الأرض";

  const addComment = (event) => {
    event.preventDefault();

    if (!newComment.trim()) return;

    setComments((previous) => [
      ...previous,
      {
        name: "زائر",
        date: new Date().toLocaleDateString("ar"),
        stars: rating,
        comment: newComment.trim(),
      },
    ]);

    setNewComment("");
    setRating(5);
  };

  return (
    <main className="land-page" dir="rtl">
      <div className="land-breadcrumb">
        <strong>تفاصيل الأرض</strong>
      </div>

      
      <section className="land-hero">
        <div className="land-hero-content">
          <h1>
            {details.title ||
              `أرض زراعية في ${details.city || "سوريا"}`}
          </h1>

          <div className="land-quick-stats">
            <div>
              <span>المساحة</span>
              <strong>{details.area ?? "—"} دونم</strong>
            </div>

            <div>
              <span>السعر</span>
              <strong>${details.price ?? "—"}</strong>
            </div>

            <div>
              <span>حالة الحجز</span>
              <strong className="land-status">
                {details.bookingStatus || "متاحة"}
              </strong>
            </div>
          </div>

          <p className="land-hero-description">
            {details.description || land.description}
          </p>

          <button
            className="land-primary-btn"
            onClick={() =>
              document
                .getElementById("land-owner")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          > تواصل مع المالك
          </button>
        </div>

        <div className="land-hero-image">
          <img
            src={images[selectedImage]}
            alt="الأرض الزراعية"
            onError={(event) => {
              event.currentTarget.src = "/lands/p1.jpg";
            }}
          />

          <span className="land-image-counter">
            {selectedImage + 1} / {images.length}
          </span>
        </div>
      </section>

      
      <section className="land-gallery-section">
        <div className="land-section-heading">
          <div>
            <span className="land-eyebrow">اكتشف المكان</span>
            <h2>صور الأرض</h2>
          </div>
          <span className="land-muted">{images.length} صور</span>
        </div>

        <div className="land-thumbnails">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              className={`land-thumbnail ${
                selectedImage === index ? "active" : ""
              }`}
              onClick={() => setSelectedImage(index)}
              aria-label={`عرض الصورة ${index + 1}`}
            >
              <img
                src={src}
                alt={`صورة الأرض ${index + 1}`}
                onError={(event) => {
                  event.currentTarget.style.opacity = "0.25";
                }}
              />
            </button>
          ))}
        </div>
      </section>

      
      <section className="land-details-section">
        <div className="land-section-heading">
          <div>
           <h2>تفاصيل الأرض</h2>
          </div>
        </div>

        <div className="land-info-grid">
          <article className="land-info-card">
            <div className="land-card-heading">
              <h3>المعلومات العامة</h3>
            </div>

            <div className="land-info-row">
              <span>المساحة</span>
              <strong>{details.area ?? "غير محدد"} دونم</strong>
            </div>

            <div className="land-info-row">
              <span>السعر</span>
              <strong>${details.price ?? "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>المدينة</span>
              <strong>{details.city || "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>المنطقة</span>
              <strong>{details.village || "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>حالة الحجز</span>
              <strong className="land-status">
                {details.bookingStatus || "متاحة"}
              </strong>
            </div>

            <div className="land-info-row">
              <span>نهاية الحجز</span>
              <strong>{details.bookingEndDate || "غير محدد"}</strong>
            </div>
          </article>

          <article className="land-info-card">
            <div className="land-card-heading">
              <h3>التجهيزات والخدمات</h3>
            </div>

            <div className="land-info-row">
              <span>عدد العمال</span>
              <strong>{details.workersNumber ?? "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>المعدات</span>
              <strong>{details.equipments || "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>طريقة الري</span>
              <strong>{details.irrigationMethods || "غير محدد"}</strong>
            </div>
          </article>

          <article className="land-info-card">
            <div className="land-card-heading">
              <h3>الخصائص الزراعية</h3>
            </div>

            <div className="land-info-row">
              <span>نوع التربة</span>
              <strong>{details.soilTypes || "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>المناخ</span>
              <strong>{details.climateDescription || "غير محدد"}</strong>
            </div>

            <div className="land-info-row">
              <span>معدل الأمطار</span>
              <strong>{details.ratingsAverage ?? "غير محدد"}</strong>
            </div>

            <div className="land-info-row land-info-row-column">
              <span>المحاصيل المناسبة</span>
              <strong>{details.suitableCrops || "غير محدد"}</strong>
            </div>
          </article>
        </div>
      </section>

    
      <section className="land-owner-section" id="land-owner">
        <div className="land-owner-profile">
          <div className="land-owner-avatar">
            <img
                      src="/lands/profile-circle.png"
                      alt=""
                      style={{
                        width: 30,
                        height: 30,
                        marginRight: 4,
                      }}
                    />
          </div>

          <div>
            <span className="land-eyebrow">صاحب الأرض</span>
            <h3>{ownerName}</h3>
            <p>{details.email || "noor.alsaba@gmail.com"}</p>
            <p>{details.phone || "0997798911"}</p>
          </div>
        </div>

        <div className="land-owner-actions">
          {details.email && (
            <a
              className="land-primary-btn"
              href={`mailto:${details.email}`}
            > مراسلة المالك
            </a>
          )}

          <button
            className="land-outline-btn"
            onClick={() =>
              alert("الحجز تجريبي حاليًا، ولم يتم تفعيل الحجز الفعلي.")
            }
          >
            احجز هذه الأرض
          </button>
        </div>
      </section>

      <section className="land-comments-section">
        <div className="land-section-heading">
          <div>
            <h2>التعليقات والتقييمات</h2>
          </div>
          <span className="land-muted">{comments.length} تعليقات</span>
        </div>

        <div className="land-comments-grid">
          {comments.map((comment, index) => (
            <article className="land-comment-card" key={index}>
              <div className="land-comment-top">
                <div className="land-comment-avatar">
                  {comment.name.charAt(0)}
                </div>

                <div>
                  <strong>{comment.name}</strong>
                  <small>{comment.date}</small>
                </div>

                <span className="land-stars">
                  {"★".repeat(comment.stars)}
                  {"☆".repeat(5 - comment.stars)}
                </span>
              </div>

              <p>{comment.comment}</p>
            </article>
          ))}
        </div>

        <form className="land-comment-form" onSubmit={addComment}>
          <h3>أضف تعليقك</h3>

          <label htmlFor="land-rating">تقييمك</label>
          <select
            id="land-rating"
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
          >
            <option value={5}>5 نجوم</option>
            <option value={4}>4 نجوم</option>
            <option value={3}>3 نجوم</option>
            <option value={2}>نجمتان</option>
            <option value={1}>نجمة واحدة</option>
          </select>

          <label htmlFor="land-comment">التعليق</label>
          <textarea
            id="land-comment"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            placeholder="شاركنا رأيك حول الأرض..."
            rows={3}
            required
          />

          <button className="land-primary-btn" type="submit">
            نشر التعليق
          </button>
        </form>
      </section>
    </main>
  );
}
