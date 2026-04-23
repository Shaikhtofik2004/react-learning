import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);

    setTitle('');
    setDetails('');
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-gradient-to-br from-gray-900 to-black text-white">
      <form
        onSubmit={submitHandler}
        className="flex gap-5 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl mb-4 font-bold tracking-tight">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-3 border-2 border-gray-700 bg-transparent outline-none rounded-lg focus:border-white transition"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="px-5 w-full font-medium h-32 py-3 border-2 border-gray-700 bg-transparent outline-none rounded-lg focus:border-white transition resize-none"
          placeholder="Write Details here"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="bg-white hover:bg-gray-200 active:scale-95 transition font-semibold w-full text-black px-5 py-3 rounded-lg shadow-md">
          Add Note
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l border-gray-700 p-10">
        <h1 className="text-4xl font-bold tracking-tight">Recent Notes</h1>

        <div className="flex flex-wrap gap-6 mt-6 h-[85%] overflow-auto pr-2">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col relative h-56 w-44 bg-cover rounded-xl text-black pt-10 pb-4 px-4 shadow-lg hover:scale-105 transition duration-200 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div className="overflow-hidden">
                  <h3 className="leading-tight text-lg font-bold line-clamp-2">
                    {elem.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold text-gray-700 line-clamp-4">
                    {elem.details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 hover:bg-red-600 transition py-1.5 text-xs rounded font-bold text-white shadow"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
