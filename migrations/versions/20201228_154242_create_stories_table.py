"""create stories table

Revision ID: 2309fef10f17
Revises: ffdc0a98111c
Create Date: 2020-12-28 15:42:42.025489

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2309fef10f17'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('stories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=False),
    sa.Column('body', sa.String(), nullable=False),
    sa.Column('author_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['author_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('stories')
    # ### end Alembic commands ###
