## LAB 05 => TASK 1
In this lab I converted REact project from JavaScript to TypeScript. The goal was to ude type checking for props and data structures.
At first, I created the types.ts file where I defined: 
1. Interface User
2. Interface Skill
3. type SkilLevel(union type)

I used interface for object and type for union values. It helps to prevent wrong data.

Then in UserCard component I created typed props with optional isActive and children: React.ReactNode. Default value works when prop is not passed.
In SkillList I used Skill[] array type and conditional color based on skill level.
I didn't use any project compiles without errors.
In this lab I learned that TypeScript catch mistakes before running the code and it is safer than normal JavaScript.