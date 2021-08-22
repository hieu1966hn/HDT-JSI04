function Content(props) {
    return (
      <section id="scroll">
        <div className="container px-5">
          <div className="row gx-5 align-items-center">
            <div className={"col-lg-6" + (props.reversed ? " order-lg-2" : "")}>
              <div className="p-5">
                <img
                  className="img-fluid rounded-circle"
                  src={props.img}
                  alt="..."
                />
              </div>
            </div>
            <div className={"col-lg-6" + (props.reversed ? " order-lg-1" : "")}>
              <div className="p-5">
                <h2 className="display-4">For those about to rock...</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  aliquid, mollitia odio veniam sit iste esse assumenda amet
                  aperiam exercitationem, ea animi blanditiis recusandae! Ratione
                  voluptatum molestiae adipisci, beatae obcaecati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  export default Content;
  