package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.LoginPages;

public class Definitions
{
	WebDriver driver = null;
	LoginPages loginpages = new LoginPages();
	@Given("I want to open the browser")
	public void i_want_to_open_the_browser() {
		WebDriverManager.chromedriver().setup();
		driver= new ChromeDriver();
		driver.manage().window().maximize();
	}

	@Given("navigate to https:\\/\\/www.saucedemo.com\\/")
	public void navigate_to_https_www_saucedemo_com() {
		driver.navigate().to("https://www.saucedemo.com/");
	}

	@When("user enters incorrect abc and xyz")
	public void user_enters_incorrect_abc_and_xyz() {
		driver.findElement(loginpages.invalidusername).sendKeys("abc");
		driver.findElement(loginpages.invalidpassword).sendKeys("xyz");
	}

	@When("click on login button")
	public void click_on_login_button() {
		driver.findElement(loginpages.loginbutton).click();
	}

	@Then("Login should be unsuccessfull")
	public void login_should_be_unsuccessfull() {
	    
	}

	@Then("user clears the screen")
	public void user_clears_the_screen() {
		driver.findElement(loginpages.validusername).clear();
		driver.findElement(loginpages.validpassword).clear();  
	}

	@When("user enters correct standard_user and secret_sauce")
	public void user_enters_correct_standard_user_and_secret_sauce() {
		driver.findElement(loginpages.validusername).sendKeys("standard_user");
		driver.findElement(loginpages.validpassword).clear();
		driver.findElement(loginpages.validpassword).sendKeys("secret_sauce");
	
	}
	
	@When("click on login1 button")
	public void click_on_login1_button() {
		driver.findElement(loginpages.loginbutton).click();
	}

	@Then("home page should be displayed")
	public void home_page_should_be_displayed() {
		System.out.println("Home page is displayed");
	}

	@Then("add an item to the cart")
	public void add_an_item_to_the_cart() {
		driver.findElement(loginpages.addproduct).click();
	}

	@Then("verify the item in the cart")
	public void verify_the_item_in_the_cart() {
		driver.findElement(loginpages.viewcart).click();
	}

	@And("remove the item from the cart")
	public void remove_the_item_from_the_cart() {
		driver.findElement(loginpages.removeproduct).click();
		driver.close();
	}

}
