function Contact() {
  return (
    <div>
      <form>
        <label for="fname">First name:</label>
        <br />
        <input type="text" required id="fname" name="fname" />
        <br />
        <label for="emaills">Email:</label>
        <br />
        <input type="email" required id="email" name="emaills" />
        <label for='message'>Message</label>
        <br/>
        <textarea required name='email'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
