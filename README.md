# Working with IDEA

You can tell the IDE to use eslint and prettier:

- right click on `.eslintrc.json` -> `Apply ESLint Code Style Styles`
- right click on `.prettierrc` -> `Apply Prettier Code Style Styles`

In order to use Prettier as default formatter on `ctrl + alt + l` (don't forget to install plugin):

- File | Settings | Languages & Frameworks | JavaScript | Prettier -> check `On code reformat`

# Singe or double quotes???

`"@typescript-eslint/quotes": ["warn", "backtick"]`

Neither. People
are [still arguing](https://stackoverflow.com/questions/242813/when-should-i-use-double-or-single-quotes-in-javascript)
instead of doing something useful. Luckily, we have template strings which are simply awesome. Why won't use backtick as
default, even for non-template strings? You may argue that template strings are slower than regular ones (which I highly
doubt) – your babel will transpile it anyway.

`"react/jsx-curly-brace-presence": ["warn", { "props": "always", "children": "never" }]`

Template string won't work as an attr without braces. Personally, I don't see what's useful about the ability to remove
braces for strings attrs only. It must be an option either for all types or none.   


