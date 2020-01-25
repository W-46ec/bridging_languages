```
    ____       _     __      _
   / __ )_____(_)___/ /___ _(_)___  ____ _
  / __  / ___/ / __  / __ `/ / __ \/ __ `/
 / /_/ / /  / / /_/ / /_/ / / / / / /_/ /
/_____/_/  /_/\__,_/\__, /_/_/ /_/\__, /
                   /____/        /____/
    __
   / /   ____ _____  ____ ___  ______ _____ ____  _____
  / /   / __ `/ __ \/ __ `/ / / / __ `/ __ `/ _ \/ ___/
 / /___/ /_/ / / / / /_/ / /_/ / /_/ / /_/ /  __(__  )
/_____/\__,_/_/ /_/\__, /\__,_/\__,_/\__, /\___/____/
                  /____/            /____/

Development Environment
```

# Bridging Languages Devlopment Environment

A docker environment for the Bridging Languages coding contest, with a lot of programming languages installed.

## Installation

For macOS and Windows, you will need Docker desktop: https://www.docker.com/products/docker-desktop

On Linux, you will need Docker and docker-compose

## Running the Development Environment

From a terminal, in this directory run `docker-compose run dev-environment`. You will find yourself at a bash prompt in the running development environment container, in the directory `/code`, which is this directory, mounted from the host environemnt.

# What's included?

The environment is based on Ubuntu 19.10 and includes:
- Node.js v10.15.2 (`node`)
- Python versions 2.7.17 (`python`) and 3.7.5 (`python3`)
- Go 1.12.10 (`go`)
- OpenJDK 11.0.5 (`java`, `javac`)
- Ruby 2.5.5 (`ruby`, `irb`)
- The Glorious Glasgow Haskell Compilation System 8.6.5 (`ghc`, `ghci`)
- Clojure 1.10.1.502 (`clojure`, `clj`)
- Rust 1.40.0 (`rustc`, `cargo`)
- Swift 5.1.3 (`swift`, `swiftc`)
- Clang 7.0 (`clang`)
- GCC 9.2.1 (`gcc`, `g++`)

# How can I customise the environment further?

Make changes to `Dockerfile` in this directory, then run `docker-compose build dev-environment`

# Compilation & Execution

## Question 1

- Quick sort
```
g++ -o quicksort quickSort.cpp
quicksort < inputFile
```

- Merge sort
```
node mergesort.js < inputFile
```

- Heap sort
```
python3 heapsort.py < inputFile
```
