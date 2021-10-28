<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
  <script type="text/babel">
   const Message = props => <div className="message">{props.msg}</div>

    const element = (
    <div className="Container">
        <Message msg="Hello World"></Message>
        <Message msg="Hello aqui"></Message>
    </div>
)

    ReactDom.render(element, document.getElementById('root'))
  </script>
</body>



