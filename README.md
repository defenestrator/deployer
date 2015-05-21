Deployer
=================================

### My little blue-green deployment system:

#### Goals:
- 0 downtime Laravel deployments on AWS 
- AWS Elastic Load Balancer
- 1 Hosted Zone Route 53
- 2 t2.small EC2 boxes at most, 1 at least, in an auto-scaling group.
- 1 RDS Instance
- 1 t2.micro instance as a worker.

#### Proposal:
- NodeJS listens to github on port 3420
- An Ansible job is fired in response to a given git event.
- Ansible handles AWS Auto-Scaling Group spin up of new EC2 box
- Code is cloned, deployed, tested, and the new EC2 instance is placed behind ELB. 
- Once the new build is healthy the new box will connect to the RDS DB
- Old box will spin down, due to ASG rules.
  