import React from "react"

function Contact(){ 
    return(
        <div>
            <div class="imagebackground">
              <div class="getintouch">
                  Get in touch
              </div>
              <div class="words">
                Have any more questions or want to know more? Please feel free to contact me
              </div>

        
          </div>
          <div class="form"> 
            <form action="#">
            <div class="form-group">
                <label for="form_name">Name <strong>required</strong></label>
                <input type="text" class="form-control" id="form_name" name="user_name" placeholder="John Smith" required=""/>
            </div>
    
            <div class="form-group">
                <label for="form_email">Email <strong>(required)</strong></label>
                <input type="text" class="form-control" id="form_email" name="user_email" placeholder="john.smith@example.com" required=""/>
            </div>
    
            <label for="form_message">Message <strong>(required)</strong></label>
            <textarea class="form-control" id="form_message" maxlength="200" rows="6" required=""></textarea>
    
            <input type="submit" id="form_submit" value="Submit" class="btn btn-outline-primary"/>
           </form>
          </div>
        </div>

    )
}
export default Contact