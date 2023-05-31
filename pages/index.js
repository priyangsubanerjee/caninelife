/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <main>
      <div className="flex items-center lg:justify-normal justify-between h-20 lg:px-28 px-6 shadow-xl shadow-zinc-50">
        <div className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6462/6462524.png"
            alt=""
            className="lg:h-10 h-8"
          />
          <h1 className="text-lg lg:text-xl font-medium text-gray-800 font-jost">
            Canine Life
          </h1>
        </div>
        <ul className="hidden lg:flex items-center space-x-7 font-jost ml-16 text-zinc-700">
          <li>Dog breeds</li>
          <li>Cat breeds</li>
          <li className="flex relative">
            <span>Community</span>
            <span className="h-fit absolute top-0 left-[80%] translate-x-1/2 text-xs px-3 rounded-full bg-red-300">
              new
            </span>
          </li>
        </ul>
        <div className="lg:ml-auto cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      {/* <div className="bg-yellow-100 grid grid-cols-2 px-36 font-jost">
        <div className="py-20">
          <h1 className="text-4xl font-semibold">Community heading</h1>
          <p className="mt-6 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur nobis qui odit laboriosam quos ut, tenetur dolor
            recusandae velit animi. Deleniti eaque est consequuntur tempore
            expedita sunt amet impedit enim voluptas, inventore quisquam nobis
            quos possimus, praesentium iusto accusamus corrupti, id excepturi
            unde. Aliquam, reprehenderit quidem numquam vero suscipit tempora?
          </p>
          <button className="mt-10 px-6 py-3 bg-zinc-700 text-white rounded-md">
            Join the community
          </button>
        </div>
        <div className="flex items-center justify-center -space-x-16">
          <img
            src="https://content1.getnarrativeapp.com/static/4608b3ef-6f1c-493a-87a6-4e1c31ea88f1/Young-couple-with-dog-at-sunset-in-a-field-with-wildflowers-nature-golden-hour-light-summer-time-German-Shepherd-dog.-Girl-is-wearing-a-striped-blue-summer-dress-with-heels-and-guy-is-wearing-white-shirt-and-blue-jesns-with-long-hair.-Photos-are-taken-at-Lebanon-Hills-Regional-Park-in-Eagan-Minnesota..jpg?w=500"
            alt=""
            className="h-44 w-44 rounded-full object-cover border-2 border-black"
          />
          <img
            src="https://nicolegeriphotography.com/wp-content/uploads/2020/06/Bekah_And_Allen_announcement-00795.jpg"
            alt=""
            className="h-72 w-72 rounded-full object-cover z-10 shadow-md border-2 border-black"
          />
          <img
            src="https://www.barkingdogimages.com/wp-content/uploads/2023/01/Camber-1yr-1-2-1024x683.jpg"
            alt=""
            className="h-44 w-44 rounded-full object-cover border-2 border-black"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 px-36 font-jost py-20">
        <div className="">
          <img
            src="https://www.insideprecisionmedicine.com/wp-content/uploads/2022/08/GettyImages-1219893612-696x449.jpg"
            alt=""
          />
        </div>
        <div className="pl-10">
          <h1 className="text-4xl font-semibold">Store medical records</h1>
          <p className="mt-6 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur nobis qui odit laboriosam quos ut, tenetur dolor
            recusandae velit animi. Deleniti eaque est consequuntur tempore
            expedita sunt amet impedit enim voluptas, inventore quisquam nobis
            quos possimus, praesentium iusto accusamus corrupti, id excepturi
            unde. Aliquam, reprehenderit quidem numquam vero suscipit tempora?
          </p>
          <button className="mt-10 px-6 py-3 bg-zinc-700 text-white rounded-md">
            Join the community
          </button>
        </div>
      </div>
      <div className="bg-blue-100 grid grid-cols-2 px-36 font-jost py-20">
        <div className="">
          <h1 className="text-4xl font-semibold">Community heading</h1>
          <p className="mt-6 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur nobis qui odit laboriosam quos ut, tenetur dolor
            recusandae velit animi. Deleniti eaque est consequuntur tempore
            expedita sunt amet impedit enim voluptas, inventore quisquam nobis
            quos possimus, praesentium iusto accusamus corrupti, id excepturi
            unde. Aliquam, reprehenderit quidem numquam vero suscipit tempora?
          </p>
          <button className="mt-10 px-6 py-3 bg-zinc-700 text-white rounded-md">
            Join the community
          </button>
        </div>
        <div className="">
          <img
            src="https://cdn.scopicsoftware.com/wp-content/uploads/2022/09/Oo%E2%89%A4%E2%80%9E_1.png"
            alt=""
            className=""
          />
        </div>
      </div> */}
    </main>
  );
}
