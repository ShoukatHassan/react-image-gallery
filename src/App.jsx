import { useState } from "react";

function App() {
  const items = [
    {
      label: "Item 1",
      title: "First Item",
      description: "This is the first item in the array.",
      image:
        "https://i.pinimg.com/564x/62/93/9d/62939da2a7074de271349f314edb3dc3.jpg",
    },
    {
      label: "Item 2",
      title: "Second Item",
      description: "This is the second item in the array.",
      image:
        "https://i.pinimg.com/564x/91/af/7d/91af7da6c4320c0c73ca68b8518fb5c7.jpg",
    },
    {
      label: "Item 3",
      title: "Third Item",
      description: "This is the third item in the array.",
      image:
        "https://i.pinimg.com/564x/0a/ea/50/0aea5022f15010c2bb31134bc24d6514.jpg",
    },
    {
      label: "Item 4",
      title: "Fourth Item",
      description: "This is the fourth item in the array.",
      image:
        "https://i.pinimg.com/564x/82/f6/ee/82f6eef36eba22e247764dda62e99caf.jpg",
    },
    {
      label: "Item 5",
      title: "Fifth Item",
      description: "This is the fifth item in the array.",
      image:
        "https://i.pinimg.com/564x/ab/d4/b2/abd4b23f031fa73a1bba266796ccd0d2.jpg",
    },
    {
      label: "Item 6",
      title: "Sixth Item",
      description: "This is the sixth item in the array.",
      image:
        "https://i.pinimg.com/564x/59/09/eb/5909eb671b64480a9e2947e12026fab2.jpg",
    },
    {
      label: "Item 7",
      title: "Seventh Item",
      description: "This is the seventh item in the array.",
      image:
        "https://i.pinimg.com/564x/43/62/e0/4362e08ac7fb788a4a9fa82a778c3114.jpg",
    },
    {
      label: "Item 8",
      title: "Eighth Item",
      description: "This is the eighth item in the array.",
      image:
        "https://i.pinimg.com/564x/8e/dd/16/8edd161f13a8daccf1f4597ba36e8af2.jpg",
    },
    {
      label: "Item 9",
      title: "Ninth Item",
      description: "This is the ninth item in the array.",
      image:
        "https://i.pinimg.com/736x/36/86/21/36862124018c5bdda47491f1af23d646.jpg",
    },
    {
      label: "Item 10",
      title: "Tenth Item",
      description: "This is the tenth item in the array.",
      image:
        "https://i.pinimg.com/564x/d2/9c/c4/d29cc44912d5975077f6273a4e165a19.jpg",
    },
  ];

  // State to manage modal visibility and image source
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Function to open the modal with the selected image
  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = (e) => {
    if (e.target.id === "modalOverlay") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Image Grid */}
      <div
        className={`bg-slate-800 w-full min-h-screen p-5 flex flex-wrap flex-row gap-4 ${
          isOpen ? "blur-sm" : ""
        }`}
      >
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-card rounded-lg shadow-lg overflow-hidden bg-white max-h-[500px]"
          >
            <div className="bg-accent p-4">
              <img
                aria-hidden="true"
                alt={item.title}
                src={item.image}
                className="mx-auto w-full max-w-[230px] cursor-pointer transition-transform transform duration-500 ease-in-out hover:-translate-y-[50px]"
                onClick={() => openModal(item.image)} // Opens modal on click
              />
            </div>
            <div className="p-4">
              <span className="text-muted text-sm font-medium">
                {item.label}
              </span>
              <h2 className="text-lg font-bold mt-1">{item.title}</h2>
              <p className="text-muted-foreground mt-2">{item.description}</p>
            </div>
            <div className="p-4">
              <button className="bg-primary text-primary-foreground hover:bg-primary/80 w-full py-2 rounded-lg">
                Action
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          id="modalOverlay"
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={closeModal} // Close when clicking outside the image
        >
          <img
            src={modalImage}
            alt="Modal content"
            className="border-4 border-white rounded-lg max-w-[90%] max-h-[90%] mx-auto"
          />
        </div>
      )}
    </>
  );
}

export default App;
