require "test_helper"

class ContentwebsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contentweb = contentwebs(:one)
  end

  test "should get index" do
    get contentwebs_url
    assert_response :success
  end

  test "should get new" do
    get new_contentweb_url
    assert_response :success
  end

  test "should create contentweb" do
    assert_difference('Contentweb.count') do
      post contentwebs_url, params: { contentweb: {  } }
    end

    assert_redirected_to contentweb_url(Contentweb.last)
  end

  test "should show contentweb" do
    get contentweb_url(@contentweb)
    assert_response :success
  end

  test "should get edit" do
    get edit_contentweb_url(@contentweb)
    assert_response :success
  end

  test "should update contentweb" do
    patch contentweb_url(@contentweb), params: { contentweb: {  } }
    assert_redirected_to contentweb_url(@contentweb)
  end

  test "should destroy contentweb" do
    assert_difference('Contentweb.count', -1) do
      delete contentweb_url(@contentweb)
    end

    assert_redirected_to contentwebs_url
  end
end
