// // import React, { useContext, useState } from "react";
// // import GlobalContext from "../context/GlobalContext";

// // export default function EventModal() {
// //   const {
// //     setShowEventModal,
// //     daySelected,
// //     dispatchCalEvent,
// //     selectedEvent,
// //   } = useContext(GlobalContext);

// //   const [title, setTitle] = useState(
// //     selectedEvent ? selectedEvent.title : ""
// //   );
// //   const [description, setDescription] = useState(
// //     selectedEvent ? selectedEvent.description : ""
// //   );

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     const calendarEvent = {
// //       title,
// //       day: daySelected.valueOf(),
// //       id: selectedEvent ? selectedEvent.id : Date.now(),
// //       description,
// //     };
// //     if (selectedEvent) {
// //       dispatchCalEvent({ type: "update", payload: calendarEvent });
// //     } else {
// //       dispatchCalEvent({ type: "push", payload: calendarEvent });
// //     }

// //     setShowEventModal(false);
// //   }
// //   return (
// //     <div className="h-screen w-full fixed left-0 top-0 flex justify-left">
// //       <form className="bg-white rounded-lg shadow-2xl w-2/15">
// //         <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
// //           <span className="material-icons-outlined text-gray-400">
// //             drag_handle
// //           </span>{" "}
// //           <div>
// //             {selectedEvent && (
// //               <span
// //                 onClick={() => {
// //                   dispatchCalEvent({
// //                     type: "delete",
// //                     payload: selectedEvent,
// //                   });
// //                   setShowEventModal(false);
// //                 }}
// //                 className="material-icons-outlined text-gray-400 cursor-pointer"
// //               >
// //                 delete
// //               </span>
// //             )}
// //             <button onClick={() => setShowEventModal(false)}>
// //               <span className="material-icons-outlined text-gray-400">
// //                 close
// //               </span>
// //             </button>
// //           </div>
// //         </header>
// //         <div className="px-8">
// //           {/* gap between the lines  */}
// //           <div className="grid grid-cols-1/7 items-end gap-y-2">
// //             <div></div>
// //             <input
// //               type="text"
// //               name="title"
// //               placeholder="Add title and time "
// //               value={title}
// //               required
// //               className=" pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
// //               onChange={(e) => setTitle(e.target.value)}
// //             />

// //             <div class="inline-flex">
// //               <button
// //                 type="button"
// //                 class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white squared-full border border-none hover:bg-gray-100 hover:text-blue-700 font-bold focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
// //               >
// //                 Event
// //               </button>
// //               <button
// //                 type="button"
// //                 class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white squared-full border border-none hover:bg-gray-100 hover:text-blue-700 font-bold focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
// //               >
// //                 Reminder
// //               </button>
// //             </div>
// //             <span className="material-icons-outlined text-gray-100">
// //               schedule
// //             </span>

// //             {/* //time selector */}
// //             <div date-rangepicker class="flex items-center">
// //               <div class="rangerpicker">
// //                 <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// //                   <svg
// //                     class="w-5 h-5 text-gray-500 dark:text-gray-400"
// //                     fill="currentColor"
// //                   >
// //                     <path
// //                       fill-rule="evenodd"
// //                       d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
// //                       clip-rule="evenodd"
// //                     ></path>
// //                   </svg>
// //                 </div>
// //                 <input
// //                   name="start"
// //                   type="text"
// //                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// //                   placeholder="Select date start"
// //                 />
// //               </div>
// //               <span class="mx-4 text-gray-500">to</span>
// //               <div class="rangerpicker">
// //                 <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
// //                   <svg
// //                     class="w-5 h-5 text-gray-500 dark:text-gray-400"
// //                     fill="currentColor"
// //                   >
// //                     <path
// //                       fill-rule="evenodd"
// //                       d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
// //                       clip-rule="evenodd"
// //                     ></path>
// //                   </svg>
// //                 </div>
// //                 <input
// //                   name="end"
// //                   type="text"
// //                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
// //                   placeholder="Select date end"
// //                 />
// //               </div>
// //             </div>

// //             {/* <span className="text-gray-400 font-bold">
// //               <p>{daySelected.format("dddd, MMMM DD")}</p>
// //             </span> */}

// //             <span className="material-icons-outlined text-gray-400">
// //               segment
// //             </span>
// //             <input
// //               type="text"
// //               name="description"
// //               placeholder="Add a description"
// //               value={description}
// //               required
// //               className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
// //               onChange={(e) => setDescription(e.target.value)}
// //             />
// //           </div>
// //         </div>
// //         <footer className="flex justify-end border-t p-3 mt-5">
// //           <button
// //             type="submit"
// //             onClick={handleSubmit}
// //             className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
// //           >
// //             Save
// //           </button>
// //         </footer>
// //       </form>
// //     </div>
// //   );
// // }
// //-------------------------------------------------------------------------------------------------------------------------

// import React, { useContext, useState } from "react";
// import GlobalContext from "../context/GlobalContext";

// export default function EventModal() {
//   const {
//     setShowEventModal,
//     daySelected,
//     dispatchCalEvent,
//     selectedEvent,
//   } = useContext(GlobalContext);

//   const [title, setTitle] = useState(
//     selectedEvent ? selectedEvent.title : ""
//   );
//   const [description, setDescription] = useState(
//     selectedEvent ? selectedEvent.description : ""
//   );

//   function handleSubmit(e) {
//     e.preventDefault();
//     const calendarEvent = {
//       title,
//       description,
//       day: daySelected.valueOf(),
//       id: selectedEvent ? selectedEvent.id : Date.now(),
//     };
//     if (selectedEvent) {
//       dispatchCalEvent({ type: "update", payload: calendarEvent });
//     } else {
//       dispatchCalEvent({ type: "push", payload: calendarEvent });
//     }

//     setShowEventModal(false);
//   }
//   return (
//     <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
//       <form className="bg-white rounded-lg shadow-2xl w-1/4">
//         <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
//           <span className="material-icons-outlined text-gray-400">
//             drag_handle
//           </span>
//           <div>
//             {selectedEvent && (
//               <span
//                 onClick={() => {
//                   dispatchCalEvent({
//                     type: "delete",
//                     payload: selectedEvent,
//                   });
//                   setShowEventModal(false);
//                 }}
//                 className="material-icons-outlined text-gray-400 cursor-pointer"
//               >
//                 delete
//               </span>
//             )}
//             <button onClick={() => setShowEventModal(false)}>
//               <span className="material-icons-outlined text-gray-400">
//                 close
//               </span>
//             </button>
//           </div>
//         </header>
//         <div className="p-3">
//           <div className="grid grid-cols-1/5 items-end gap-y-7">
//             <div></div>
//             <input
//               type="text"
//               name="title"
//               placeholder="Add title"
//               value={title}
//               required
//               className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
//               onChange={(e) => setTitle(e.target.value)}
//             />
//             <span className="material-icons-outlined text-gray-400">
//               schedule
//             </span>
//             <p>{daySelected.format("dddd, MMMM DD")}</p>
//             <span className="material-icons-outlined text-gray-400">
//               segment
//             </span>
//             <input
//               type="text"
//               name="description"
//               placeholder="Add a description"
//               value={description}
//               required
//               className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </div>
//         </div>
//         <div class="inline-flex">
//           <button
//             type="button"
//             class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white squared-full border border-none hover:bg-gray-100 hover:text-blue-700 font-bold focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//           >
//             Event
//           </button>
//           <button
//             type="button"
//             class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white squared-full border border-none hover:bg-gray-100 hover:text-blue-700 font-bold focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//           >
//             Reminder
//           </button>
//         </div>
//         <footer className="flex justify-end border-t p-3 mt-5">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
//           >
//             Save
//           </button>
//         </footer>
//       </form>
//     </div>
//   );
// }
