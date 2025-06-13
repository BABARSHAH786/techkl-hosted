'use client';
// import { Link } from 'react-router-dom';
import GsCoding from '../components/GsCoding'

import { useState } from 'react';

// import { Metadata}  from "next"


const Quiz = () => {
  const questions = [
    {
      text: 'How can you handle multiple dynamic parameters in Next.js routes?',
      options: [
        'A. You can [...param] syntax in nature',
        'B. Define a middleware to parse parameters',
        'C. Use getServerSideProps function to extract parameters',
        'D. A and C (CORRECT)'
      ],
      correct: 3
    },
    {
      text: 'Priority prop in next/image components after image loading?',
      options: [
        'A. It disables lazy loading for the image (CORRECT)',
        'B. It defers loading of the image',
        'C. It loads the image only on user interaction',
        'D. It automatically compresses the image'
      ],
      correct: 0
    },
    // Add more questions here
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  return (
  <>  
  <GsCoding />
  {/* <Link ref="/jdc-it-city" to={''}>Governor Sindh IT Course</Link> */}

   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
      <div className="max-w-2xl w-full bg-white p-8 rounded-2xl shadow-xl text-gray-900">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-4">Python and Agentic AI  Section A</h1>
        <p className="text-lg text-gray-700 text-center">Begins Tuesday, Feb 18 at 7:00 PM</p>
        <div className="mt-6 space-y-4">
          <p className="text-gray-800 text-lg">Next Tuesday at 7:00 PM, classes for Section A will commence. Only the top-performing students will be admitted to this section.</p>
          <p className="text-gray-800 text-lg">If you are selected, you ll receive an email shortly as we are currently finalizing the results. Once you get the email, please log in to the portal to print your new student ID card.</p>
          <p className="text-gray-800 text-lg">Announcements for Sections B, C, D, etc., will follow as additional results are released.</p>
          <p className="text-gray-800 text-lg font-semibold">Additionally, Sir Zia will be joining the Section A class.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-indigo-700 font-bold">Stay tuned!</p>
          <p className="text-gray-600">Best regards,</p>
          <p className="text-gray-900 font-semibold">Daniyal Nagori</p>
        </div>
      </div>
    </div>

    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Next.js MCQs</h1>
        {questions.map((q, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-semibold mb-2">{q.text}</p>
            <ul className="space-y-2">
              {q.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`p-3 rounded-md cursor-pointer transition-all ${
                    selectedAnswers[index] === optionIndex
                      ? optionIndex === q.correct
                        ? 'bg-green-500'
                        : 'bg-red-500'
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  onClick={() => handleSelect(index, optionIndex)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>

        ))}
      </div>
    </div>
    </>

  );
};

export default Quiz;













// const questions = [
//   {
//     question: "What is Google Colab?",
//     options: ["A cloud-based Python IDE", "A paid software for data science", "A Google Chrome extension", "A file compression tool"],
//     answer: "A cloud-based Python IDE",
//   },
//   {
//     question: "What programming language does Google Colab primarily support?",
//     options: ["Java", "R", "Python", "C++"],
//     answer: "Python",
//   },
//   {
//     question: "Which of the following is NOT a benefit of using Google Colab?",
//     options: ["Free access to GPUs", "Cloud-based execution", "Built-in Java support", "Easy sharing and collaboration"],
//     answer: "Built-in Java support",
//   },
//   {
//     question: "How can you create a new notebook in Google Colab?",
//     options: ["File > New Notebook", "Edit > New File", "Runtime > New Notebook", "Insert > New Cell"],
//     answer: "File > New Notebook",
//   },
//   {
//     question: "What shortcut adds a new code cell in Google Colab?",
//     options: ["Ctrl + Shift + C", "Ctrl + M + B", "Alt + C", "Ctrl + Enter"],
//     answer: "Ctrl + M + B",
//   },
//   {
//     question: "Which of the following is used to execute a cell?",
//     options: ["Ctrl + S", "Shift + Enter", "Ctrl + Enter", "Alt + Enter"],
//     answer: "Shift + Enter",
//   },
//   {
//     question: "What is the purpose of text cells in Colab notebooks?",
//     options: ["Execute SQL queries", "Add explanations using Markdown", "Write JavaScript code", "Install Python packages"],
//     answer: "Add explanations using Markdown",
//   },
//   {
//     question: "Which markup language is supported in text cells?",
//     options: ["HTML", "LaTeX", "Markdown", "BBCode"],
//     answer: "Markdown",
//   },
//   {
//     question: "What does `#` represent in Markdown?",
//     options: ["A comment", "A list item", "A hyperlink", "A header"],
//     answer: "A header",
//   },
//   {
//     question: "How do you write bold text in Markdown?",
//     options: ["**text**", "_text_", "`text`", "***text***"],
//     answer: "**text**",
//   },
//   {
//     question: "Which command installs external Python libraries in Colab?",
//     options: ["install.package()", "!apt install", "!pip install", "pip.get()"],
//     answer: "!pip install",
//   },
//   {
//     question: "How do you add a text cell using a shortcut?",
//     options: ["Ctrl + T", "Ctrl + M + A", "Ctrl + Shift + T", "Ctrl + N"],
//     answer: "Ctrl + M + A",
//   },
//   {
//     question: "Where do you go to enable GPU or TPU support?",
//     options: ["Edit > Settings", "Insert > Runtime Type", "Runtime > Change runtime type", "Tools > GPU Settings"],
//     answer: "Runtime > Change runtime type",
//   },
//   {
//     question: `What does the following code do?\nprint("Hello, Google Colab!")`,
//     options: ["Creates a loop", "Displays an image", "Prints a string to output", "Checks GPU status"],
//     answer: "Prints a string to output",
//   },
//   {
//     question: `What is the output of this code?\nprint("Hello, Google Colab!")`,
//     options: ["Nothing", "Hello Google!", "Hello, Google Colab!", "Error"],
//     answer: "Hello, Google Colab!",
//   },
//   {
//     question: "How can you check if a GPU is available in Colab using TensorFlow?",
//     options: ["check.gpu()", "gpu.status()", "tf.config.experimental.list_physical_devices('GPU')", "tensorflow.gpu()"],
//     answer: "tf.config.experimental.list_physical_devices('GPU')",
//   },
//   {
//     question: "Where can you find the option to share your notebook?",
//     options: ["File > Share", "Edit > Share", "View > Share", "Tools > Share"],
//     answer: "File > Share",
//   },
//   {
//     question: "What type of files can be executed directly in Google Colab?",
//     options: [".docx", ".ipynb", ".html", ".exe"],
//     answer: ".ipynb",
//   },
//   {
//     question: "Which button on the interface runs the current code cell?",
//     options: ["Stop button", "Play button (▶️)", "Reset button", "Refresh button"],
//     answer: "Play button (▶️)",
//   },
//   {
//     question: "Which of these is NOT a part of the Colab interface?",
//     options: ["Toolbar", "Menu bar", "Notebook cells", "Desktop launcher"],
//     answer: "Desktop launcher",
//   },
//   {
//     question: "How can you upload files to Google Colab?",
//     options: ["Drag and drop into notebook", "Use the Upload button in the file browser", "Use a USB drive", "Type the filename in a cell"],
//     answer: "Use the Upload button in the file browser",
//   },
//   {
//     question: "Which icon opens the file browser in Colab?",
//     options: ["Play icon", "Folder icon", "Cloud icon", "Drive icon"],
//     answer: "Folder icon",
//   },
//   {
//     question: "How do you download a file from a Colab notebook?",
//     options: [
//       "Right-click and select Download",
//       "Use the files.download() function",
//       "Click File > Download",
//       "Use the copy() function"
//     ],
//     answer: "Use the files.download() function",
//   },
//   {
//     question: "Which Python module is used to download files in Colab?",
//     options: ["os", "colab", "google.colab.files", "shutil"],
//     answer: "google.colab.files",
//   },
//   {
//     question: "How do you mount Google Drive in Colab?",
//     options: [
//       "drive.load('/mydrive')",
//       "files.mount('/google')",
//       "drive.mount('/content/drive')",
//       "os.mount('drive')"
//     ],
//     answer: "drive.mount('/content/drive')",
//   },
//   {
//     question: "What happens after mounting Google Drive?",
//     options: [
//       "You download a ZIP file",
//       "A browser window opens for authentication",
//       "Your notebook restarts",
//       "Your runtime is cleared"
//     ],
//     answer: "A browser window opens for authentication",
//   },
//   {
//     question: "Where are mounted Google Drive files located?",
//     options: [
//       "/mydrive",
//       "/content/google",
//       "/user/docs",
//       "/content/drive/My Drive/"
//     ],
//     answer: "/content/drive/My Drive/",
//   },
//   {
//     question: "How can you clone a GitHub repository in Colab?",
//     options: [
//       "import git.clone('url')",
//       "!git clone https://github.com/username/repository.git",
//       "git install repo",
//       "!wget https://github.com/username/repository"
//     ],
//     answer: "!git clone https://github.com/username/repository.git",
//   },
//   {
//     question: "What is used to read a Google Sheet CSV link?",
//     options: ["np.loadtxt()", "os.read()", "pandas.read_csv()", "colab.read_google()"],
//     answer: "pandas.read_csv()",
//   },
//   {
//     question: "Which module is used to read external datasets like Google Sheets in Colab?",
//     options: ["matplotlib", "numpy", "pandas", "urllib"],
//     answer: "pandas",
//   },
//   {
//     question: "How can you share a Google Colab notebook?",
//     options: [
//       "File > Save As PDF",
//       "Share via Google Chat",
//       "Click the Share button and send the link",
//       "Copy and paste the cell code"
//     ],
//     answer: "Click the Share button and send the link",
//   },
//   {
//     question: "Can multiple users collaborate in real-time on a Colab notebook?",
//     options: ["Yes", "No", "Only in paid version", "Only with GitHub"],
//     answer: "Yes",
//   },
//   {
//     question: "What’s the benefit of adding comments in Colab notebooks?",
//     options: [
//       "Improve GPU speed",
//       "Explain code logic for others and yourself",
//       "Reduce file size",
//       "Enable debugging"
//     ],
//     answer: "Explain code logic for others and yourself",
//   },
//   {
//     question: "What’s a way to clear all outputs in Colab?",
//     options: ["File > Reset", "View > Output > Clear", "Edit > Clear all outputs", "Tools > Clear memory"],
//     answer: "Edit > Clear all outputs",
//   },
//   {
//     question: "Why should you use version control like GitHub with Colab?",
//     options: [
//       "To prevent code execution",
//       "For syntax checking",
//       "To collaborate and track changes",
//       "To run code offline"
//     ],
//     answer: "To collaborate and track changes",
//   },
//   {
//     question: "Which is a drawback of Kaggle Notebooks compared to Colab?",
//     options: [
//       "No access to TPUs",
//       "No community features",
//       "Less GPU flexibility and 9-hour runtime limit",
//       "Harder to use datasets"
//     ],
//     answer: "Less GPU flexibility and 9-hour runtime limit",
//   },
//   {
//     question: "Which Colab alternative provides access to high-end GPUs like A100s?",
//     options: ["Kaggle", "Deepnote", "Paperspace Gradient", "Run.ai"],
//     answer: "Paperspace Gradient",
//   },
//   {
//     question: "Which environment provides drag-and-drop ML model building?",
//     options: ["SageMaker", "Azure ML Studio", "Google Colab", "Hugging Face Spaces"],
//     answer: "Azure ML Studio",
//   },
//   {
//     question: "What’s a con of AWS SageMaker Studio?",
//     options: [
//       "Free tier only",
//       "Too simple for complex models",
//       "High cost and complex setup",
//       "No GPU access"
//     ],
//     answer: "High cost and complex setup",
//   },
//   {
//     question: "Which platform is great for sharing ML models with interactive UIs?",
//     options: [
//       "Hugging Face Spaces",
//       "Paperspace",
//       "JupyterLab",
//       "Deepnote"
//     ],
//     answer: "Hugging Face Spaces",
//   },
//   {
//     question:"Step 1 MCQS START Introduction to Python ",
//     options: [
//       "Intro to python mcqs",
     
//     ],
//   },
//   {
//     question: "Who created the Python programming language?",
//     options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
//     answer: "Guido van Rossum",
//   },
//   {
//     question: "What type of language is Python?",
//     options: ["Low-level and compiled", "High-level and interpreted", "Assembly-based", "Machine code"],
//     answer: "High-level and interpreted",
//   },
//   {
//     question: "Which of the following is NOT a Python paradigm?",
//     options: ["Procedural", "Object-Oriented", "Functional", "Assembly-Oriented"],
//     answer: "Assembly-Oriented",
//   },
//   {
//     question: "Why is Python widely used by beginners?",
//     options: ["Low memory usage", "Hard syntax rules", "Beginner-friendly syntax", "Expensive licensing"],
//     answer: "Beginner-friendly syntax",
//   },
//   {
//     question: "Which of the following makes Python popular in data science?",
//     options: ["Built-in GPU usage", "Lack of libraries", "Extensive libraries like Pandas and NumPy", "Static typing"],
//     answer: "Extensive libraries like Pandas and NumPy",
//   },
//   {
//     question: "What kind of compatibility does Python offer?",
//     options: ["Windows only", "Mac only", "Cross-platform", "Linux only"],
//     answer: "Cross-platform",
//   },
//   {
//     question: "Which field heavily uses Python for building predictive models?",
//     options: ["Fashion", "Architecture", "Machine Learning", "Carpentry"],
//     answer: "Machine Learning",
//   },
//   {
//     question: "Which Python framework is commonly used in Agentic AI?",
//     options: ["React", "LangChain", "Spring", "Vue"],
//     answer: "LangChain",
//   },
//   {
//     question: "What is Agentic AI mainly focused on?",
//     options: ["Static data processing", "Autonomous perception, reasoning, and action", "File compression", "Image storage"],
//     answer: "Autonomous perception, reasoning, and action",
//   },
//   {
//     question: "Which of the following is a tool used in Agentic AI systems?",
//     options: ["TensorFlow.js", "CrewAI", "Next.js", "Excel"],
//     answer: "CrewAI",
//   },
//   {
//     question: "Which Python library is commonly used for Natural Language Processing (NLP)?",
//     options: ["NumPy", "Matplotlib", "NLTK", "OpenCV"],
//     answer: "NLTK",
//   },
//   {
//     question: "Python supports integration of which AI-related component?",
//     options: ["Text formatting", "Natural Language Processing", "Desktop publishing", "Sound mixing"],
//     answer: "Natural Language Processing",
//   },
//   {
//     question: "Which domain uses Python for image recognition and object detection?",
//     options: ["Cybersecurity", "Web Hosting", "Computer Vision", "Database Administration"],
//     answer: "Computer Vision",
//   },
//   {
//     question: "Which industry uses Python for controlling drones and autonomous vehicles?",
//     options: ["Robotics", "Healthcare", "Education", "Retail"],
//     answer: "Robotics",
//   },
//   {
//     question: "Which web framework is written in Python?",
//     options: ["Django", "React", "Angular", "Flask.js"],
//     answer: "Django",
//   },
//   {
//     question: "Which of the following is NOT an application of Python?",
//     options: ["Machine learning", "Web development", "Mobile carrier service", "Automation"],
//     answer: "Mobile carrier service",
//   },
//   {
//     question: "Which Python package is useful for scientific computing?",
//     options: ["TensorBoard", "SciPy", "Webpack", "Gulp"],
//     answer: "SciPy",
//   },
//   {
//     question: "Which of the following uses Python in penetration testing?",
//     options: ["Word processors", "Cybersecurity", "Food processing", "Video editing"],
//     answer: "Cybersecurity",
//   },
//   {
//     question: "Python is a preferred language in IoT due to its:",
//     options: ["Static typing", "Low-level operations", "Ease of use and libraries", "GPU requirements"],
//     answer: "Ease of use and libraries",
//   },
//   {
//     question: "Which of these Python features supports rapid prototyping?",
//     options: ["Complex syntax", "Hardware acceleration", "Simple syntax and dynamic typing", "Static compilation"],
//     answer: "Simple syntax and dynamic typing",
//   },
//   {
//     question: "What allows Python agents to reason and act autonomously?",
//     options: ["GPU threads", "LLM frameworks like LangChain", "Web hosting", "CSS libraries"],
//     answer: "LLM frameworks like LangChain",
//   },
//   {
//     question: "Which OpenAI tool helps build Agentic AI applications?",
//     options: ["Codex", "Auto-GPT", "JupyterHub", "TensorBoard"],
//     answer: "Auto-GPT",
//   },
//   {
//     question: "Which Python module is widely used for data visualization?",
//     options: ["os", "requests", "matplotlib", "json"],
//     answer: "matplotlib",
//   },
//   {
//     question: "Python is ideal for which type of AI workflow?",
//     options: ["Static sites", "Rendering videos", "LLM-driven workflows", "Copywriting"],
//     answer: "LLM-driven workflows",
//   },
//   {
//     question: "What does 'interpreted language' mean in Python?",
//     options: ["Runs after compilation", "Runs directly line by line", "Needs pre-processing", "Doesn't need an interpreter"],
//     answer: "Runs directly line by line",
//   },
//   {
//     question: "What is the role of bytecode in Python?",
//     options: ["It's used in web design", "It runs in browsers", "It’s a compiled version of source code for the Python VM", "It powers JavaScript"],
//     answer: "It’s a compiled version of source code for the Python VM",
//   },
//   {
//     question: "What does the code execution continuum describe?",
//     options: ["Python installations", "Runtime environments only", "Steps from writing code to execution and output", "Function return types"],
//     answer: "Steps from writing code to execution and output",
//   },
//   {
//     question: "Python is especially known for which of the following?",
//     options: ["Verbose code", "Manual memory management", "Simplicity and readability", "Hardware-level programming"],
//     answer: "Simplicity and readability",
//   },
//   {
//     question: "Which company offers the AutoGen framework used with Python?",
//     options: ["Apple", "Microsoft", "Facebook", "Adobe"],
//     answer: "Microsoft",
//   },
//   {
//     question: "What does Python's object-oriented programming paradigm support?",
//     options: ["Binary-level debugging", "Classes and objects", "Device drivers", "BIOS management"],
//     answer: "Classes and objects",
//   },
//   {
//     question: "What is Python bytecode?",
//     options: [
//       "Machine-level code for CPUs",
//       "A sequence of binary instructions interpreted by the Python VM",
//       "HTML embedded in Python",
//       "Compiled JavaScript",
//     ],
//     answer: "A sequence of binary instructions interpreted by the Python VM",
//   },
//   {
//     question: "Which file extension stores compiled Python bytecode?",
//     options: [".py", ".exe", ".pyc", ".pyd"],
//     answer: ".pyc",
//   },
//   {
//     question: "Where are compiled bytecode files typically stored?",
//     options: ["site-packages", "__pycache__", "venv", "bin"],
//     answer: "__pycache__",
//   },
//   {
//     question: "Which module allows inspection of Python bytecode?",
//     options: ["inspect", "compile", "dis", "code"],
//     answer: "dis",
//   },
//   {
//     question: "What happens during lexical analysis in Python compilation?",
//     options: [
//       "Code is converted into machine instructions",
//       "Tokens like identifiers and keywords are extracted",
//       "Syntax is checked for errors",
//       "Code is disassembled",
//     ],
//     answer: "Tokens like identifiers and keywords are extracted",
//   },
//   {
//     question: "What is the purpose of the Python Virtual Machine (PVM)?",
//     options: [
//       "Compiling C code",
//       "Generating JavaScript from Python",
//       "Executing compiled Python bytecode",
//       "Managing Python installations",
//     ],
//     answer: "Executing compiled Python bytecode",
//   },
//   {
//     question: "What command compiles Python code to bytecode?",
//     options: [
//       "python -run",
//       "python -byte",
//       "python -m compileall",
//       "python compile this",
//     ],
//     answer: "python -m compileall",
//   },
//   {
//     question: "Which function in the dis module disassembles a class or function?",
//     options: ["inspect()", "disassemble()", "dis.dis()", "code.dis()"],
//     answer: "dis.dis()",
//   },
//   {
//     question: "Can a Python .pyc file run on any OS?",
//     options: [
//       "Yes, without any limitations",
//       "Only on Linux",
//       "Only if the Python interpreter version matches",
//       "Only on Windows",
//     ],
//     answer: "Only if the Python interpreter version matches",
//   },
//   {
//     question: "What is the standard indentation level in Python?",
//     options: ["2 spaces", "3 tabs", "4 spaces", "No indentation"],
//     answer: "4 spaces",
//   },
//   {
//     question: "What error is caused by inconsistent indentation in Python?",
//     options: ["RuntimeError", "TypeError", "IndentationError", "ImportError"],
//     answer: "IndentationError",
//   },
//   {
//     question: "In Python, code blocks begin after which symbol?",
//     options: [".", ":", ";", "#"],
//     answer: ":",
//   },
//   {
//     question: "What type of typing system does Python use?",
//     options: [
//       "Statically typed",
//       "Dynamically typed",
//       "Strongly compiled",
//       "Hardware-typed",
//     ],
//     answer: "Dynamically typed",
//   },
//   {
//     question: "Which version of Python introduced optional type hinting?",
//     options: ["3.0", "2.7", "3.5", "3.8"],
//     answer: "3.5",
//   },
//   {
//     question: "What is the output type of `input()` in Python?",
//     options: ["int", "float", "str", "bool"],
//     answer: "str",
//   },
//   {
//     question: "Which syntax correctly applies type hinting in a function parameter?",
//     options: [
//       "def greet(name) -> str:",
//       "def greet(name: str):",
//       "def greet(str name):",
//       "def greet(str: name):",
//     ],
//     answer: "def greet(name: str):",
//   },
//   {
//     question: "Which of the following shows correct type hinting for a dictionary?",
//     options: [
//       "my_dict: dict[int, str]",
//       "my_dict: dictionary",
//       "my_dict: dict[str, int]",
//       "my_dict = dict[str, int]",
//     ],
//     answer: "my_dict: dict[str, int]",
//   },
//   {
//     question: "Which tool uses type hints for static type checking?",
//     options: ["Jupyter", "MyPy", "Flask", "pip"],
//     answer: "MyPy",
//   },
//   {
//     question: "Why use type hints in Python?",
//     options: [
//       "To compile faster",
//       "To remove indentation",
//       "For better code readability and static analysis",
//       "To encrypt code",
//     ],
//     answer: "For better code readability and static analysis",
//   },
//   {
//     question: "Which of the following is NOT a characteristic of Python bytecode?",
//     options: [
//       "Machine-specific",
//       "Platform-independent",
//       "Interpreted by PVM",
//       "Cached for faster execution",
//     ],
//     answer: "Machine-specific",
//   },
//   {
//     question: "What is the main limitation of object-based languages compared to object-oriented languages?",
//     options: [
//       "They don't support encapsulation",
//       "They cannot define functions",
//       "They lack full support for inheritance and polymorphism",
//       "They cannot create objects",
//     ],
//     answer: "They lack full support for inheritance and polymorphism",
//   },
//   {
//     question: "Which of the following is an example of an object-based language (pre-ES6)?",
//     options: ["Python", "Java", "JavaScript", "C++"],
//     answer: "JavaScript",
//   },
//   {
//     question: "Which feature is supported by both object-based and object-oriented languages?",
//     options: ["Inheritance", "Encapsulation", "Polymorphism", "All of the above"],
//     answer: "Encapsulation",
//   },
//   {
//     question: "What does it mean that Python is 'object-centric'?",
//     options: [
//       "Only custom classes can be objects",
//       "Only user-defined data types are supported",
//       "Everything in Python is an object, even integers and strings",
//       "Objects must be created manually using memory management",
//     ],
//     answer: "Everything in Python is an object, even integers and strings",
//   },
//   {
//     question: "What is duck typing in Python?",
//     options: [
//       "A way to define object types statically",
//       "Checking type before method execution",
//       "Using object behavior rather than type to determine compatibility",
//       "Defining classes that inherit from Duck class",
//     ],
//     answer: "Using object behavior rather than type to determine compatibility",
//   },
//   {
//     question: "Which best describes the concept of 'first-class functions' in Python?",
//     options: [
//       "Functions must return integers",
//       "Functions can only be passed to classes",
//       "Functions are treated as objects and can be passed, returned, or assigned",
//       "Functions must always be declared before use",
//     ],
//     answer: "Functions are treated as objects and can be passed, returned, or assigned",
//   },
//   {
//     question: "Which OOP principle allows one class to use properties and methods of another?",
//     options: ["Encapsulation", "Polymorphism", "Inheritance", "Duck typing"],
//     answer: "Inheritance",
//   },
//   {
//     question: "In Python’s OOP model, what happens when a method is overridden in a subclass?",
//     options: [
//       "Both parent and child methods run",
//       "Only the parent method runs",
//       "The child method replaces the parent method for that class",
//       "It causes a compile-time error",
//     ],
//     answer: "The child method replaces the parent method for that class",
//   },
//   {
//     question: "In the example of duck typing, why can a Parrot be passed to `have_conversation()`?",
//     options: [
//       "Because Parrot inherits from Human",
//       "Because Parrot is an instance of the same class",
//       "Because Parrot has a speak method, which is all that’s required",
//       "Because Python performs type checking before execution",
//     ],
//     answer: "Because Parrot has a speak method, which is all that’s required",
//   },
//   {
//     question: "Which Python feature allows treating unrelated objects the same if they have similar behavior?",
//     options: ["Inheritance", "Static typing", "Duck typing", "Function overloading"],
//     answer: "Duck typing",
//   },
//   {
//     question: "Which of the following is NOT a numeric data type in Python?",
//     options: ["int", "float", "char", "complex"],
//     answer: "char",
//   },
//   {
//     question: "What is the output type of the expression `type(3 + 4j)`?",
//     options: ["int", "float", "str", "complex"],
//     answer: "complex",
//   },
//   {
//     question: "Which attributes are used to access the real and imaginary parts of a complex number?",
//     options: [".real and .imag", ".realpart and .imaginary", ".real() and .imag()", ".r and .i"],
//     answer: ".real and .imag",
//   },
//   {
//     question: "What does the `bool` data type represent in Python?",
//     options: ["Text values", "Decimal numbers", "Logical values: True or False", "None type"],
//     answer: "Logical values: True or False",
//   },
//   {
//     question: "Which of the following is a correct way to create a string in Python?",
//     options: [
//       `"Hello, Python!"`,
//       `'Hello, Python!'`,
//       `'''Hello, Python!'''`,
//       `All of the above`
//     ],
//     answer: "All of the above",
//   },
//   {
//     question: "What is the key difference between a list and a tuple in Python?",
//     options: [
//       "List is immutable, tuple is mutable",
//       "Tuple allows duplicates, list does not",
//       "List is mutable, tuple is immutable",
//       "Tuples are slower than lists",
//     ],
//     answer: "List is mutable, tuple is immutable",
//   },
//   {
//     question: "Which data type would you use for a fixed, ordered group of values that should not change?",
//     options: ["list", "set", "tuple", "range"],
//     answer: "tuple",
//   },
//   {
//     question: "Which of these Python types is used to represent a sequence of numbers with a defined step?",
//     options: ["tuple", "list", "range", "dict"],
//     answer: "range",
//   },
//   {
//     question: "What is the result of `print(type(True))` in Python?",
//     options: ["<class 'str'>", "<class 'bool'>", "<class 'int'>", "<class 'NoneType'>"],
//     answer: "<class 'bool'>",
//   },
//   {
//     question: "In the list `[1, 2, 3, 'Python', 3.14, 3+2j]`, how many different data types are included?",
//     options: ["2", "3", "4", "5"],
//     answer: "4", // int, str, float, complex
//   },
//   {
//     question: "Which of the following is a **mutable** data type that stores **unique, unordered** elements?",
//     options: ["list", "tuple", "set", "dict"],
//     answer: "set",
//   },
//   {
//     question: "What is the key difference between a `set` and a `frozenset` in Python?",
//     options: [
//       "frozenset allows duplicate values",
//       "frozenset is mutable, set is immutable",
//       "frozenset is immutable, set is mutable",
//       "set is ordered, frozenset is unordered"
//     ],
//     answer: "frozenset is immutable, set is mutable",
//   },
//   {
//     question: "Which Python data type stores **key-value pairs**?",
//     options: ["set", "tuple", "dict", "list"],
//     answer: "dict",
//   },
//   {
//     question: "Which of the following represents a **bytes** object in Python?",
//     options: [
//       "'Hello'", 
//       '"Hello"', 
//       "b'Hello'", 
//       "bytes(Hello)"
//     ],
//     answer: "b'Hello'",
//   },
//   {
//     question: "What will be the output of `print(type(frozenset([1, 2, 2, 3])))`?",
//     options: [
//       "<class 'set'>", 
//       "<class 'frozenset'>", 
//       "<class 'list'>", 
//       "<class 'tuple'>"
//     ],
//     answer: "<class 'frozenset'>",
//   },
//   {
//     question: "What is the key difference between `bytearray` and `bytes` in Python?",
//     options: [
//       "`bytearray` is immutable, whereas `bytes` is mutable",
//       "`bytearray` and `bytes` are both immutable",
//       "`bytearray` is mutable, allowing in-place modifications",
//       "`bytes` allows in-place modifications, unlike `bytearray`"
//     ],
//     answer: "`bytearray` is mutable, allowing in-place modifications"
//   },
  
//   {
//     question: "Which of the following number systems is based on 16 unique digits and commonly used in computing?",
//     options: [
//       "Binary",
//       "Decimal",
//       "Hexadecimal",
//       "Octal"
//     ],
//     answer: "Hexadecimal"
//   },
  
//   {
//     question: "What will `chr(65)` output in Python?",
//     options: [
//       "65",
//       "'A'",
//       "'B'",
//       "Error"
//     ],
//     answer: "'A'"
//   },
  
//   {
//     question: "What is the output of the following code?\n\nbyte_array = bytearray([65, 66, 67, 69])\nprint(byte_array)",
//     options: [
//       "b'ABCE'",
//       "bytearray('ABCE')",
//       "bytearray(b'ABCE')",
//       "[65, 66, 67, 69]"
//     ],
//     answer: "bytearray(b'ABCE')"
//   },
  
//   {
//     question: "In the context of number systems, what does the term \"base\" refer to?",
//     options: [
//       "The number of bytes in a character",
//       "The number of binary digits in a system",
//       "The number of unique digits used in the system",
//       "The number of operations possible on numbers"
//     ],
//     answer: "The number of unique digits used in the system"
//   },
//   {
//     question: "What is UTF-8?",
//     options: [
//       "A fixed-length character encoding system",
//       "A variable-length character encoding system",
//       "A deprecated character encoding format",
//       "A character encoding system for only English text"
//     ],
//     answer: "A variable-length character encoding system"
//   },
  
//   {
//     question: "What does the `id()` function in Python return?",
//     options: [
//       "The type of an object",
//       "The memory address of an object",
//       "A unique identifier for an object",
//       "The size of an object in memory"
//     ],
//     answer: "A unique identifier for an object"
//   },
  
//   {
//     question: "What is the purpose of the `id()` function in Python?",
//     options: [
//       "To check the size of an object",
//       "To check object equality by comparing memory addresses",
//       "To create a new identifier for an object",
//       "To convert an object to a string"
//     ],
//     answer: "To check object equality by comparing memory addresses"
//   },
  
//   {
//     question: "What is the output of the following code?\n\nbyte_array = bytearray([65, 66, 67, 69])\nprint(byte_array.decode('utf-8'))",
//     options: [
//       "Decoded string: A",
//       "Decoded string: ABCE",
//       "Error",
//       "Decoded string: 65 66 67 69"
//     ],
//     answer: "Decoded string: ABCE"
//   },
  
//   {
//     question: "What is the output of this code snippet?\n\nba = bytearray(b'hello')\nba[0] = 72\nprint(ba)",
//     options: [
//       "bytearray(b'hello')",
//       "bytearray(b'HellO')",
//       "bytearray(b'Hello')",
//       "bytearray(b'HELLO')"
//     ],
//     answer: "bytearray(b'Hello')"
//   },
  
//   {
//     question: "What is a `memoryview` object in Python?",
//     options: [
//       "A view to modify the memory of another object without creating a copy",
//       "A special type of array used in Python",
//       "A function for managing memory manually",
//       "A way to store large datasets as raw binary data"
//     ],
//     answer: "A view to modify the memory of another object without creating a copy"
//   },
  
//   {
//     question: "What will the following code output?\n\nmem_view = memoryview(b'Operation Badar')\nprint(bytes(mem_view[0:5]))",
//     options: [
//       "b'Opera'",
//       "None",
//       "b'Operati'",
//       "Operation"
//     ],
//     answer: "b'Opera'"
//   },
  
//   {
//     question: "What is the `None` data type in Python?",
//     options: [
//       "A placeholder for an undefined object",
//       "A type that represents no value or null object reference",
//       "A type to represent a missing argument in a function",
//       "A special numeric type"
//     ],
//     answer: "A type that represents no value or null object reference"
//   },
  
//   {
//     question: "What does the expression `id(x) == id(z)` evaluate to in the following code?\n\nx = None\nz = x",
//     options: [
//       "False",
//       "True",
//       "None",
//       "Error"
//     ],
//     answer: "True"
//   },
  
//   {
//     question: "What is the output of this code?\n\nx: str = None\ny: str = None\nprint(x == y)",
//     options: [
//       "True",
//       "False",
//       "None",
//       "Error"
//     ],
//     answer: "True"
//   },
//   {
//     question: "What is UTF-8?",
//     options: [
//       "A fixed-length character encoding system",
//       "A variable-length character encoding system",
//       "A deprecated character encoding format",
//       "A character encoding system for only English text"
//     ],
//     answer: "A variable-length character encoding system"
//   },
  
//   {
//     question: "What does the `id()` function in Python return?",
//     options: [
//       "The type of an object",
//       "The memory address of an object",
//       "A unique identifier for an object",
//       "The size of an object in memory"
//     ],
//     answer: "A unique identifier for an object"
//   },
  
//   {
//     question: "What is the purpose of the `id()` function in Python?",
//     options: [
//       "To check the size of an object",
//       "To check object equality by comparing memory addresses",
//       "To create a new identifier for an object",
//       "To convert an object to a string"
//     ],
//     answer: "To check object equality by comparing memory addresses"
//   },
  
//   {
//     question: "What is the output of the following code?\n\nbyte_array = bytearray([65, 66, 67, 69])\nprint(byte_array.decode('utf-8'))",
//     options: [
//       "Decoded string: A",
//       "Decoded string: ABCE",
//       "Error",
//       "Decoded string: 65 66 67 69"
//     ],
//     answer: "Decoded string: ABCE"
//   },
  
//   {
//     question: "What is the output of this code snippet?\n\nba = bytearray(b'hello')\nba[0] = 72\nprint(ba)",
//     options: [
//       "bytearray(b'hello')",
//       "bytearray(b'HellO')",
//       "bytearray(b'Hello')",
//       "bytearray(b'HELLO')"
//     ],
//     answer: "bytearray(b'Hello')"
//   },
//   {
//     question: "Which of the following is a falsy value in Python?",
//     options: [
//       "Non-zero integers",
//       "Non-empty strings",
//       "Empty lists",
//       "Non-empty dictionaries"
//     ],
//     answer: "Empty lists"
//   },
  
//   {
//     question: "What will be the output of the following code?\n\nk = -9\nb = bool(k)\nprint(b)",
//     options: [
//       "False",
//       "True",
//       "None",
//       "Error"
//     ],
//     answer: "True"
//   },
  
//   {
//     question: "What is the output of the following expression?\n\nbool(\"\")",
//     options: [
//       "True",
//       "False",
//       "None",
//       "Error"
//     ],
//     answer: "False"
//   },
  
//   {
//     question: "What does the `isinstance()` function in Python do?",
//     options: [
//       "Checks if an object is a member of a class",
//       "Checks if an object is an instance of a class",
//       "Checks if an object is a subclass of another class",
//       "Checks if an object is an iterable"
//     ],
//     answer: "Checks if an object is an instance of a class"
//   },
  
//   {
//     question: "What will be the output of the following code?\n\nage = 20\nweight = 66.89\nprint(isinstance(age, int))",
//     options: [
//       "True",
//       "False",
//       "None",
//       "Error"
//     ],
//     answer: "True"
//   },


//   // new mcqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
//   {
//     question: "operators",
//     options: [
//       "step 3"
//     ],
//     answer: "True"
//   },
//   {
//     question: "What is an operand in Python?",
//     options: [
//       "A symbol that performs operations",
//       "A value the operator acts on",
//       "A type of loop",
//       "A keyword in Python"
//     ],
//     answer: "A value the operator acts on"
//   },
  
//   {
//     question: "Which of the following is a unary operator?",
//     options: [
//       "+",
//       "-",
//       "*",
//       "/"
//     ],
//     answer: "-"
//   },
  
//   {
//     question: "What will be the result of `not True` in Python?",
//     options: [
//       "True",
//       "False",
//       "None",
//       "Error"
//     ],
//     answer: "False"
//   },
  
//   {
//     question: "What does the `~` (bitwise NOT) operator do in Python?",
//     options: [
//       "Flips each bit of the number",
//       "Reverses a list",
//       "Negates the number",
//       "Performs logical AND"
//     ],
//     answer: "Flips each bit of the number"
//   },
  
//   {
//     question: "What is the output of `~5` in Python?",
//     options: [
//       "-6",
//       "-5",
//       "4",
//       "6"
//     ],
//     answer: "-6"
//   },
  
//   {
//     question: "Which function converts an integer to a binary string in Python?",
//     options: [
//       "binary()",
//       "toBinary()",
//       "bin()",
//       "strbin()"
//     ],
//     answer: "bin()"
//   },
  
//   {
//     question: "Which operator performs exponentiation?",
//     options: [
//       "^",
//       "**",
//       "//",
//       "%"
//     ],
//     answer: "**"
//   },
  
//   {
//     question: "What does the `//` operator do?",
//     options: [
//       "Modulo",
//       "Division",
//       "Exponentiation",
//       "Floor Division"
//     ],
//     answer: "Floor Division"
//   },
  
//   {
//     question: "What is the result of `10 % 3`?",
//     options: [
//       "3",
//       "1",
//       "0",
//       "10"
//     ],
//     answer: "1"
//   },
  
//   {
//     question: "Which of the following is a comparison operator?",
//     options: [
//       "+",
//       "==",
//       "and",
//       "="
//     ],
//     answer: "=="
//   },
  
//   {
//     question: "What does `x += 3` mean?",
//     options: [
//       "x = x + 3",
//       "x = 3",
//       "x = x * 3",
//       "x = x - 3"
//     ],
//     answer: "x = x + 3"
//   },
  
//   {
//     question: "Which logical operator returns True if both conditions are True?",
//     options: [
//       "or",
//       "not",
//       "xor",
//       "and"
//     ],
//     answer: "and"
//   },
  
//   {
//     question: "What is the output of `not False`?",
//     options: [
//       "True",
//       "False",
//       "None",
//       "Error"
//     ],
//     answer: "True"
//   },
  
//   {
//     question: "Which identity operator checks if two variables refer to the same object?",
//     options: [
//       "==",
//       "!=",
//       "is",
//       "="
//     ],
//     answer: "is"
//   },
  
//   {
//     question: "What is the output of `3 in [1, 2, 3]`?",
//     options: [
//       "False",
//       "Error",
//       "True",
//       "None"
//     ],
//     answer: "True"
//   },
  
//   {
//     question: "Which operator is used to check if a value is NOT in a list?",
//     options: [
//       "in",
//       "not in",
//       "!=",
//       "not"
//     ],
//     answer: "not in"
//   },
  
//   {
//     question: "Which of these is a valid variable name in Python?",
//     options: [
//       "2name",
//       "my-variable",
//       "my_variable",
//       "class"
//     ],
//     answer: "my_variable"
//   },
  
//   {
//     question: "Which of the following is NOT allowed in Python variable names?",
//     options: [
//       "_age",
//       "salary2024",
//       "2name",
//       "total_cost"
//     ],
//     answer: "2name"
//   },
  
//   {
//     question: "Which of these is a Python keyword?",
//     options: [
//       "define",
//       "def",
//       "func",
//       "function"
//     ],
//     answer: "def"
//   },
  
//   {
//     question: "What does `del x` do in Python?",
//     options: [
//       "Assigns a value to x",
//       "Deletes the variable x",
//       "Prints the value of x",
//       "Creates a new variable x"
//     ],
//     answer: "Deletes the variable x"
//   },
  
//   {
//     question: "What will happen if you access a variable after deleting it with `del`?",
//     options: [
//       "It prints None",
//       "It prints 0",
//       "It raises an error",
//       "It reinitializes the variable"
//     ],
//     answer: "It raises an error"
//   },
  
//   {
//     question: "Which naming convention is used for Python constants?",
//     options: [
//       "camelCase",
//       "UPPER_CASE",
//       "snake_case",
//       "PascalCase"
//     ],
//     answer: "UPPER_CASE"
//   },
  
//   {
//     question: "What is the convention for class names in Python?",
//     options: [
//       "snake_case",
//       "camelCase",
//       "PascalCase",
//       "lowercase"
//     ],
//     answer: "PascalCase"
//   },
  
//   {
//     question: "What does the `is not` operator do?",
//     options: [
//       "Checks inequality",
//       "Checks if two variables do not share the same memory location",
//       "Checks if values are different",
//       "None of the above"
//     ],
//     answer: "Checks if two variables do not share the same memory location"
//   },
  
//   {
//     question: "Which of these is a logical operator in Python?",
//     options: [
//       "&",
//       "||",
//       "or",
//       "~"
//     ],
//     answer: "or"
//   },
  
//   {
//     question: "What will be the result of `True and False`?",
//     options: [
//       "True",
//       "False",
//       "None",
//       "Error"
//     ],
//     answer: "False"
//   },
  
//   {
//     question: "Which of the following is used for multiplication in Python?",
//     options: [
//       "%",
//       "*",
//       "/",
//       "**"
//     ],
//     answer: "*"
//   },
  
//   {
//     question: "Which operator assigns a value to a variable?",
//     options: [
//       "==",
//       "=",
//       "===",
//       "=>"
//     ],
//     answer: "="
//   },
  
//   {
//     question: "How do you format an integer to binary string using f-strings?",
//     options: [
//       "`f'{num:b}'`",
//       "`format(num, 'binary')`",
//       "`str(bin(num))`",
//       "`bin(f'{num}')`"
//     ],
//     answer: "`f'{num:b}'`"
//   },
  
//   {
//     question: "What does `x, y, z = 1, 2.5, 'Python'` do?",
//     options: [
//       "Assigns all values to x",
//       "Assigns 1 to x, 2.5 to y, 'Python' to z",
//       "Raises a syntax error",
//       "Creates a tuple"
//     ],
//     answer: "Assigns 1 to x, 2.5 to y, 'Python' to z"
//   },
  
  
  
  
  
  

  
  
  
  
  
  
// ];