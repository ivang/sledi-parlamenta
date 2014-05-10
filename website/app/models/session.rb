class Session < ActiveRecord::Base
  has_many :votings
  has_many :votes, :through => :votings
  belongs_to :assembly, :class_name => "Structure", :foreign_key => "assembly_id"

  scope :by_year, ->(year) { where("date >= ? and date <= ?", year.to_datetime.beginning_of_year, year.to_datetime.end_of_year) }

  def members
    self.votings.first.members
  end

  def absent_votes
    absent = self.votings.order("voted_at").joins(:votes).where("votes.value" => "absent").count
    votings = self.votings.count
    absent.to_f/votings
  end

  def absent
    self.votes.absent
  end

  def absent_count
    self.absent.count
  end

  def absent_count_by_voting
    data = self.absent.joins(:voting).group("votings.voted_at").count
    data.map { |d| [d[0].to_datetime.strftime('%H:%M'), d[1]] }
  end

  def votes_by_voting
    # The query may seems odd, but we can call 'joins' on #<ActiveRecord::Relation []>
    Session.where(id: self.id).joins(:votes).group("votings.topic", "votes.value").count
  end

end