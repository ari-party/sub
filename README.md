# @robertsspaceindustries/sub

Template string substition

## Usage

```js
import formatString from "@robertsspaceindustries/sub";

formatString("Lorem {{ipsum}}", {
	ipsum: "Ipsum",
}); // Expected result: "Lorem Ipsum"
```

### Custom delimiters

```js
import formatString from "@robertsspaceindustries/sub";

formatString(
	"Lorem {ipsum}",
	{
		ipsum: "Ipsum",
	},
	{
		prefix: "{",
		suffix: "}",
	},
); // Expected result: "Lorem Ipsum"
```
