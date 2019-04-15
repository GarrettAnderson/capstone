class PosesController < ApplicationController
  before_action :set_pose, only: [:show, :update, :destroy]

  # GET /poses
  # GET /poses.json
  def index
    @course = Course.find(params[:course_id])
    @poses = @course.poses
  end

  def all
    @poses = Pose.all

    render :index
  end

  # GET /poses/1
  # GET /poses/1.json
  def show
  end

  # POST /poses
  # POST /poses.json
  def create
    @course = Course.find(params[:course_id])
    @pose = @course.poses.new(pose_params)

    if @pose.save
      render :show, status: :created
    else
      render json: @pose.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /poses/1
  # PATCH/PUT /poses/1.json
  def update
    if @pose.user == current_user
      if @pose.update(pose_params)
        render :show, status: :ok
      else
        render json: @pose.errors, status: :unprocessable_entity
      end
    else
      render json: { error: "This is not your class" }
    end
  end

  # DELETE /poses/1
  # DELETE /poses/1.json
  def destroy
    if @pose.user == current_user
      @pose.destroy
    else
      render json: { error: "This is not your class" }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_pose
    @course = Course.find(params[:course_id])
    @pose = @course.poses.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def pose_params
    params.require(:pose).permit(:name, :category, :description, :physical_benefits, :psych_benefits, :photo, :course_id)
  end
end
